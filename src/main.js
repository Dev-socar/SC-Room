import * as THREE from "three";
import { PointerLockControls } from "three-stdlib";
import { createScene } from "./scenes/scene.js";
import { createMaterial } from "./utils/materials.js";
import { loadFBXModel } from "./loaders/fbxLoader.js";
import { loadCeilingLamps } from "./loaders/ceilingLamps.js";
import { loadCeilingLampsLight } from "./lights/ceilingLampsLight.js";
import { createWalls, wallsBbox } from "./walls/createWall.js";
import { materialCreate } from "./utils/loadMaterial.js";

let scene, camera, renderer, controls, walls;

const MIN_DISTANCE = 5;
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

  // Configurar controles
  controls = new PointerLockControls(camera, document.body);

  const playButton = document.querySelector("#play_button");
  playButton.addEventListener("click", startExperience);

  controls.addEventListener("unlock", showMenu);
  document.addEventListener("keydown", onKeyDown, false);

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

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Inicializar la escena
init();
