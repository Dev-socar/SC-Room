import * as THREE from "three";
import { PointerLockControls } from "three-stdlib";
import { createScene } from "./scenes/scene.js";
import { createMaterial } from "./utils/materials.js";
import { loadCeilingLamps } from "./loaders/ceilingLamps.js";
import { loadCeilingLampsLight } from "./lights/ceilingLampsLight.js";
import { createWalls, wallsBbox } from "./walls/createWall.js";
import { materialCreate } from "./utils/loadMaterial.js";
import { createPainting, paintings } from "./paintings/createPainting.js";

import Stats from "stats.js";

let scene, camera, renderer, controls, walls, stats; // Declaramos raycaster aquí
let raycaster, intersects;
const MIN_CAMERA_Y = 0;
const MAX_CAMERA_Y = 0;

async function init() {
  const overlay = document.querySelector("#overlay");

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

  // Configurar Stats.js
  stats = new Stats();
  stats.showPanel(0); // 0: FPS, 1: MS, 2: MB
  document.body.appendChild(stats.dom);

  window.addEventListener("resize", onWindowResize);

  // Material
  const material = createMaterial();

  // Cargar lámparas y luces
  await loadCeilingLamps(scene, material);
  await loadCeilingLampsLight(scene);

  // Crear el piso
  async function createFloor(scene) {
    const materialFloor = materialCreate("texture-floor.webp", 10, 10);
    const floorGeometry = new THREE.PlaneGeometry(70, 55);
    const floor = new THREE.Mesh(floorGeometry, materialFloor);
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -Math.PI;
    scene.add(floor);
  }

  await createFloor(scene)
  

  // Crear paredes y techo
  const wallGroup = await createWalls(scene);
  walls = await wallsBbox(wallGroup);

  async function createCeiling(scene) {
    const materialCeiling = materialCreate("texture-ceiling.webp", 10, 10);
    const ceilingGeometry = new THREE.PlaneGeometry(70, 55);
    const ceiling = new THREE.Mesh(ceilingGeometry, materialCeiling);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 3.5;
    scene.add(ceiling);
  }
  await createCeiling(scene)

  // Pinturas con luces
  await createPainting(scene);

  // Configurar controles
  controls = new PointerLockControls(camera, document.body);

  const playButton = document.querySelector("#play_button");
  playButton.addEventListener("click", startExperience);

  controls.addEventListener("unlock", showMenu);
  document.addEventListener("keydown", onKeyDown, false);

  raycaster = new THREE.Raycaster(); // Raycaster para detectar interacciones

  animate();

  setTimeout(() => {
    // Una vez que todo está cargado
    hideOverlay(overlay);
  }, 500);
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
  stats.begin(); // Inicia el monitoreo
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
  stats.end(); // Finaliza el monitoreo
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

// Función para ocultar el overlay
function hideOverlay(overlay) {
  overlay.style.transition = "opacity 0.5s ease"; 
  overlay.style.opacity = 0; 
  setTimeout(() => {
    overlay.style.display = "none"; 
  }, 500); 
}

document.addEventListener("DOMContentLoaded", init);
