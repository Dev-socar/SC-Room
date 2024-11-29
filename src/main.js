import * as THREE from "three";
import { PointerLockControls } from "three-stdlib";
import { createScene } from "./scenes/scene.js";
import { createMaterial } from "./utils/materials.js";
import { loadFBXModel } from "./loaders/fbxLoader.js";
import { loadCeilingLamps } from "./loaders/ceilingLamps.js";
import { loadCeilingLampsLight } from "./lights/ceilingLampsLight.js";
import { createWalls, wallsBbox } from "./walls/createWall.js";
import { materialCreate } from "./utils/loadMaterial.js";
import { createPainting, paintings } from "./paintings/createPainting.js";

let scene, camera, renderer, controls, walls; // Declaramos raycaster aquí
let raycaster, intersects;
const MIN_CAMERA_Y = 0;
const MAX_CAMERA_Y = 0;

async function init() {
  // Crear escena, cámara y renderizador
  scene = createScene();

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 0);
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);

  // Material
  const material = createMaterial();

  // Cargar modelos de sillas
  try {
    await Promise.all([
      loadFBXModel(
        "/modelos-3D/silla.fbx",
        material,
        [4, -3, 0],
        [0.02, 0.02, 0.02],
        Math.PI / 2,
        scene
      ),
      loadFBXModel(
        "/modelos-3D/silla.fbx",
        material,
        [-4, -3, 0],
        [0.02, 0.02, 0.02],
        -Math.PI / 2,
        scene
      ),
    ]);
    console.log("Modelos de sillas cargados");
  } catch (error) {
    console.error("Error al cargar los modelos de sillas:", error);
  }

  // Cargar lámparas y luces
  await loadCeilingLamps(scene, material);
  loadCeilingLampsLight(scene);

  // Crear el piso
  const materialFloor = materialCreate("texture-floor.webp", 10, 10);
  const floorGeometry = new THREE.PlaneGeometry(70, 55);
  const floor = new THREE.Mesh(floorGeometry, materialFloor);
  floor.rotation.x = Math.PI / 2;
  floor.position.y = -Math.PI;
  scene.add(floor);

  // Crear paredes y techo
  const wallGroup = createWalls(scene);
  walls = wallsBbox(wallGroup);

  const materialCeiling = materialCreate("texture-ceiling.webp", 10, 10);
  const ceilingGeometry = new THREE.PlaneGeometry(70, 55);
  const ceiling = new THREE.Mesh(ceilingGeometry, materialCeiling);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = 3.5;
  scene.add(ceiling);

  // Pinturas
  createPainting(scene);

  // Configuración de la luz puntual
  const spotLight = new THREE.SpotLight(0xffffff, 40); // Luz blanca con intensidad 1
  spotLight.position.set(0, 5, -7); // Posición en el techo sobre el cuadro
  spotLight.target.position.set(0, 0, -7.1); // Apunta hacia el cuadro
  spotLight.angle = Math.PI / 6; // Ángulo del haz
  spotLight.penumbra = 0.5; // Suavidad en los bordes del haz
  spotLight.castShadow = true; // Generar sombras si es necesario
  scene.add(spotLight);
  scene.add(spotLight.target);

  // Configurar controles
  controls = new PointerLockControls(camera, document.body);

  const playButton = document.querySelector("#play_button");
  playButton.addEventListener("click", startExperience);

  controls.addEventListener("unlock", showMenu);
  document.addEventListener("keydown", onKeyDown, false);

  raycaster = new THREE.Raycaster(); // Raycaster para detectar interacciones

  animate();
}

// Función para ajustar el tamaño de la ventana
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Función para iniciar la experiencia
function startExperience() {
  controls.lock();
  hideMenu();
}

// Funciones para mostrar/ocultar el menú
function hideMenu() {
  const menu = document.querySelector("#menu");
  menu.style.display = "none";
}

function showMenu() {
  const menu = document.querySelector("#menu");
  menu.style.display = "block";
}

// Funciones para manejar el movimiento de la cámara
function onKeyDown(e) {
  const keycode = e.which;
  const moveDistance = 0.5;

  switch (keycode) {
    case 68: // D (derecha)
      moveRight(moveDistance);
      break;
    case 65: // A (izquierda)
      moveRight(-moveDistance);
      break;
    case 87: // W (adelante)
      moveForward(moveDistance);
      break;
    case 83: // S (atrás)
      moveForward(-moveDistance);
      break;
  }
}

function moveForward(distance) {
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  direction.y = 0;
  direction.normalize();

  const futurePosition = camera.position
    .clone()
    .add(direction.clone().multiplyScalar(distance));

  if (!checkCollision(futurePosition)) {
    camera.position.add(direction.multiplyScalar(distance));
    clampCameraHeight();
  }
}

function moveRight(distance) {
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  direction.y = 0;
  direction.normalize();

  const right = new THREE.Vector3().crossVectors(
    direction,
    new THREE.Vector3(0, 1, 0)
  );
  right.normalize();

  const futurePosition = camera.position
    .clone()
    .add(right.clone().multiplyScalar(distance));

  if (!checkCollision(futurePosition)) {
    camera.position.add(right.multiplyScalar(distance));
    clampCameraHeight();
  }
}

function clampCameraHeight() {
  camera.position.y = THREE.MathUtils.clamp(
    camera.position.y,
    MIN_CAMERA_Y,
    MAX_CAMERA_Y
  );
}

function checkCollision(position) {
  const cameraBBox = new THREE.Box3().setFromCenterAndSize(
    position,
    new THREE.Vector3(0.5, 1.7, 0.5)
  );

  for (let i = 0; i < walls.length; i++) {
    if (cameraBBox.intersectsBox(walls[i])) {
      return true;
    }
  }
  return false;
}

// Definir una constante para la distancia mínima para mostrar el popup
const DISTANCIA_MINIMA = 3.5; // Ajusta este valor según sea necesario

// Función de animación
function animate() {
  requestAnimationFrame(animate);

 
  const direction = new THREE.Vector3(); 
  camera.getWorldDirection(direction); // Obtiene la dirección desde la cámara

  // Configurar el raycaster
  raycaster.ray.origin.copy(camera.position); // Establece el origen en la posición de la cámara
  raycaster.ray.direction.copy(direction); // Establece la dirección en la dirección de la cámara

  // Realizar la intersección con las pinturas
  intersects = raycaster.intersectObjects(paintings);

  if (intersects.length > 0) {
    const painting = intersects[0].object;

    // Calcular la distancia entre la cámara y la pintura
    const distance = camera.position.distanceTo(painting.position);

    // Mostrar el popup solo si la distancia es menor que el umbral definido
    if (distance < DISTANCIA_MINIMA) {
      showPopup(painting.info); // Mostrar información de la pintura
    } else {
      hidePopup(); // Ocultar popup si la distancia es mayor que el umbral
    }
  } else {
    hidePopup(); // Ocultar popup si no hay intersección
  }

  renderer.render(scene, camera);
}

// Mostrar el popup con la información de la pintura
function showPopup(info) {
  const popup = document.querySelector("#popup");
  popup.innerHTML = info;
  popup.style.display = "block";
  popup.style.width = "400px";
}

// Ocultar el popup
function hidePopup() {
  const popup = document.querySelector("#popup");
  popup.style.display = "none";
}

init();
