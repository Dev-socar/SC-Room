import * as THREE from "three";
import { PointerLockControls } from "three-stdlib";
import { createScene } from "./scenes/scene.js";
import { createMaterial } from "./utils/materials.js";
import { loadFBXModel } from "./loaders/fbxLoader.js";
import { loadCeilingLamps } from "./loaders/ceilingLamps.js";
import { loadCeilingLampsLight } from "./lights/ceilingLampsLight.js";
import { createWalls, wallsBbox } from "./walls/createWall.js";
import { materialCreate } from "./utils/loadMaterial.js";
// Crear escena, cámara y renderizador
const scene = createScene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 0);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Material
const material = createMaterial();

// Cargar modelos de Sillas
loadFBXModel(
  "/modelos-3D/silla.fbx",
  material,
  [4, -3, 0],
  [0.02, 0.02, 0.02],
  Math.PI / 2,
  scene
);
loadFBXModel(
  "/modelos-3D/silla.fbx",
  material,
  [-4, -3, 0],
  [0.02, 0.02, 0.02],
  -Math.PI / 2,
  scene
);

//cargar lamparas
loadCeilingLamps(scene, material);

//cargar luces de las lamparas
loadCeilingLampsLight(scene);

//controls
document.addEventListener("keydown", onKeyDown, false);

//Crear el piso
const materialFloor = materialCreate('texture-floor.jpg', 5, 5);
const floorGeometry = new THREE.PlaneGeometry(70, 55);
const floor = new THREE.Mesh(floorGeometry, materialFloor);
floor.rotation.x = Math.PI / 2;
floor.position.y = -Math.PI;
scene.add(floor);

//Paredes
const wallGroup = createWalls(scene);
const walls = wallsBbox(wallGroup);

//crear techo
const materialCeiling = materialCreate("texture-ceiling.jpg", 20, 20);
const ceilingGeometry = new THREE.PlaneGeometry(70, 55);
const ceiling = new THREE.Mesh(ceilingGeometry, materialCeiling);
ceiling.rotation.x = Math.PI / 2;
ceiling.position.y = 3.5;
scene.add(ceiling);

//pinturas
function createPainting(url, w, h, p) {
  const textureLoader = new THREE.TextureLoader();
  const paintingTexture = textureLoader.load(url);
  const paintingMaterial = new THREE.MeshStandardMaterial({
    map: paintingTexture,
  });
  const paintingGeometry = new THREE.PlaneGeometry(w, h);
  const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
  painting.position.set(p.x, p.y, p.z);
  return painting;
}

const paiting1 = createPainting(
  "/imagenes/logo-fmat.jpg",
  4,
  4,
  new THREE.Vector3(0, 0, -7.1)
);

scene.add(paiting1);

// Configuración de la luz puntual
const spotLight = new THREE.SpotLight(0xffffff, 60); // Luz blanca con intensidad 1
spotLight.position.set(0, 5, -7); // Posición en el techo sobre el cuadro
spotLight.target.position.set(0, 0, -7.1); // Apunta hacia el cuadro

// Opcional: Ajustar ángulo y suavidad
spotLight.angle = Math.PI / 4; // Ángulo del haz
spotLight.distance = 0;
spotLight.penumbra = 0.5; // Suavidad en los bordes del haz
spotLight.castShadow = true; // Generar sombras si es necesario

// Agregar luz y su objetivo a la escena
scene.add(spotLight);
scene.add(spotLight.target);

//controles
const controls = new PointerLockControls(camera, document.body);
function startExperience() {
  controls.lock();
  hideMenu();
}

const playButton = document.querySelector("#play_button");
playButton.addEventListener("click", startExperience);

//ocultar menu inicial
function hideMenu() {
  const menu = document.querySelector("#menu");
  menu.style.display = "none";
}

//mostrar menu
function showMenu() {
  const menu = document.querySelector("#menu");
  menu.style.display = "block";
}

controls.addEventListener("unlock", showMenu);

// Altura mínima y máxima permitida para la cámara
const MIN_CAMERA_Y = 0; // Altura del piso
const MAX_CAMERA_Y = 0; // Altura del techo (fijada)

// Función para manejar la entrada de teclas
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

// Función para mover la cámara hacia adelante o atrás
function moveForward(distance) {
  // Obtén la dirección hacia adelante
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  direction.y = 0; // Ignorar movimiento vertical
  direction.normalize();

  // Calcula la nueva posición
  const futurePosition = camera.position
    .clone()
    .add(direction.clone().multiplyScalar(distance));

  // Verifica colisión antes de mover
  if (!checkCollision(futurePosition)) {
    camera.position.add(direction.multiplyScalar(distance));
    clampCameraHeight(); // Limitar altura de la cámara
  }
}

// Función para mover la cámara hacia los lados
function moveRight(distance) {
  // Obtén la dirección hacia adelante
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  direction.y = 0; // Ignorar movimiento vertical
  direction.normalize();

  // Calcula la dirección derecha (producto cruzado)
  const right = new THREE.Vector3().crossVectors(
    direction,
    new THREE.Vector3(0, 1, 0)
  );
  right.normalize();

  // Calcula la nueva posición
  const futurePosition = camera.position
    .clone()
    .add(right.clone().multiplyScalar(distance));

  // Verifica colisión antes de mover
  if (!checkCollision(futurePosition)) {
    camera.position.add(right.multiplyScalar(distance));
    clampCameraHeight(); // Limitar altura de la cámara
  }
}

// Función para limitar la altura de la cámara
function clampCameraHeight() {
  camera.position.y = THREE.MathUtils.clamp(
    camera.position.y,
    MIN_CAMERA_Y,
    MAX_CAMERA_Y
  );
}

// Función para verificar colisiones
function checkCollision(position) {
  // Crea el bounding box de la cámara en la posición futura
  const cameraBBox = new THREE.Box3().setFromCenterAndSize(
    position,
    new THREE.Vector3(0.5, 1.7, 0.5)
  );

  // Verifica si colisiona con alguna pared
  for (let i = 0; i < walls.length; i++) {
    if (cameraBBox.intersectsBox(walls[i])) {
      return true; // Hay colisión
    }
  }
  return false; // No hay colisión
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
