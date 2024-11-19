import * as THREE from "three";
import { PointerLockControls } from "three-stdlib";

// Crear la escena
const scene = new THREE.Scene();

// Configuración de la cámara
const camera = new THREE.PerspectiveCamera(
  60, // campo de visión
  window.innerWidth / window.innerHeight, // relación de aspecto
  0.1, // valor cercano de la cámara
  1000 // valor lejano de la cámara
);

// Ajustamos la posición de la cámara
scene.add(camera);
camera.position.set(0, 0, 0);

// Crear el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 1); // Color blanco para el fondo
document.body.appendChild(renderer.domElement);

// Crear luz ambiental (sin posición)
const ambientLight = new THREE.AmbientLight(0x101010, 1.0); // Luz suave para la escena
// ambientLight.position = camera.position
scene.add(ambientLight);

// Crear una luz direccional (opcional)
const sunLight = new THREE.DirectionalLight(0xddddd, 1.0); // Luz direccional blanca
sunLight.position.y = 15; // Posición de la luz direccional
scene.add(sunLight);

//controls
document.addEventListener("keydown", onKeyDown, false);

// Cargar la textura para el piso usando TextureLoader
const textureLoader = new THREE.TextureLoader();
const textureFloor = textureLoader.load(
  "texture-floor.jpg",
  function (texture) {
    // Ajustar la repetición de la textura
    texture.wrapS = THREE.RepeatWrapping; // Repetir en el eje S (horizontal)
    texture.wrapT = THREE.RepeatWrapping; // Repetir en el eje T (vertical)
    texture.repeat.set(10, 10); // Número de repeticiones en ambos ejes
  }
);

// Crear la geometría del piso
const planeGeometry = new THREE.PlaneGeometry(45, 55);

// Crear el material con la textura
const planeMaterial = new THREE.MeshBasicMaterial({
  map: textureFloor, // Aplicar la textura al material
  side: THREE.DoubleSide,
});

// Crear el plano con la geometría y el material
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2;
plane.position.y = -Math.PI;
scene.add(plane);

//Crear las paredes
// Cargar la textura para las paredes
const wallTexture = textureLoader.load("texture-walls.jpg", function (texture) {
  // Ajustar la repetición de la textura
  texture.wrapS = THREE.RepeatWrapping; // Repetir en el eje S (horizontal)
  texture.wrapT = THREE.RepeatWrapping; // Repetir en el eje T (vertical)
  texture.repeat.set(50, 50); // Número de repeticiones (ajusta según sea necesario)
});

// Crear el material con la textura
const wallMaterial = new THREE.MeshBasicMaterial({
  map: wallTexture, // Aplicar la textura
  side: THREE.DoubleSide, // Asegura que se renderice en ambas caras si es necesario
});

const wallGroup = new THREE.Group();
scene.add(wallGroup);

const wall1 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall1.position.z = -7.5;

const wall2 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall2.position.x = 7.5;
wall2.position.z = -17.5;
wall2.rotation.y = Math.PI / 2;

const wall3 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall3.position.x = 15;
wall3.position.z = -27.5;

const wall4 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall4.position.x = 22.5;
wall4.position.z = -17.5;
wall4.rotation.y = Math.PI / 2;

const wall5 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall5.position.x = 19;
wall5.position.z = -7.5;

const wall6 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall6.position.x = 15.5;
wall6.position.z = 0;
wall6.rotation.y = Math.PI / 2;

const wall7 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall7.position.x = 19;
wall7.position.z = 7.5;

const wall8 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall8.position.x = 22.5;
wall8.position.z = 17.5;
wall8.rotation.y = Math.PI / 2;

const wall9 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall9.position.x = 15;
wall9.position.z = 27.5;

const wall10 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall10.position.x = 7.5;
wall10.position.z = 17.5;
wall10.rotation.y = Math.PI / 2;

const wall11 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall11.position.z = 7.5;

const wall12 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall12.position.x = -7.5;
wall12.position.z = 17.5;
wall12.rotation.y = Math.PI / 2;

const wall13 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall13.position.x = -15;
wall13.position.z = 27.5;

const wall14 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall14.position.x = -22.5;
wall14.position.z = 17.5;
wall14.rotation.y = Math.PI / 2;

const wall15 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall15.position.x = -19;
wall15.position.z = 7.5;

const wall16 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall16.position.x = -15.5;
wall16.position.z = 0;
wall16.rotation.y = Math.PI / 2;

const wall17 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall17.position.x = -19;
wall17.position.z = -7.5;

const wall18 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall18.position.x = -22.5;
wall18.position.z = -17.5;
wall18.rotation.y = Math.PI / 2;

const wall19 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall19.position.x = -15;
wall19.position.z = -27.5;

const wall20 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.001),
  wallMaterial // Usar el material con textura
);
wall20.position.x = -7.5;
wall20.position.z = -17.5;
wall20.rotation.y = Math.PI / 2;

wallGroup.add(
  wall1,
  wall2,
  wall3,
  wall4,
  wall5,
  wall6,
  wall7,
  wall8,
  wall9,
  wall10,
  wall11,
  wall12,
  wall13,
  wall14,
  wall15,
  wall16,
  wall17,
  wall18,
  wall19,
  wall20
);

//ciclo para cada pared
for (let index = 0; index < wallGroup.children.length; index++) {
  wallGroup.children[index].BBox = new THREE.Box3();
  wallGroup.children[index].BBox.setFromObject(wallGroup.children[index]);
}

const walls = [];
wallGroup.children.forEach((wall) => {
  const bbox = new THREE.Box3().setFromObject(wall);
  walls.push(bbox); // Guardamos los bounding boxes de las paredes
});

// Cargar la textura para el techo usando TextureLoader
const textureCeilingLoader = new THREE.TextureLoader();
const textureCeiling = textureCeilingLoader.load(
  "texture-ceiling.jpg",
  function (texture) {
    // Ajustar la repetición de la textura
    texture.wrapS = THREE.RepeatWrapping; // Repetir en el eje S (horizontal)
    texture.wrapT = THREE.RepeatWrapping; // Repetir en el eje T (vertical)
    texture.repeat.set(20, 20); // Número de repeticiones en ambos ejes
  }
);

const ceilingMaterial = new THREE.MeshBasicMaterial({
  map: textureCeiling, // Aplicar la textura al material
  side: THREE.DoubleSide,
});

const ceilingGeometry = new THREE.PlaneGeometry(45, 55);
const ceilingPlane = new THREE.Mesh(ceilingGeometry,ceilingMaterial)
ceilingPlane.rotation.x = Math.PI / 2;
ceilingPlane.position.y = 3.5;

scene.add(ceilingPlane);

 function createPainting(url, w, h, p) {
   const textureLoader = new THREE.TextureLoader();
   const paintingTexture = textureLoader.load(url);
   const paintingMaterial = new THREE.MeshBasicMaterial({
     map: paintingTexture,
   });
   const paintingGeometry = new THREE.PlaneGeometry(w, h);
   const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
   painting.position.set(p.x, p.y, p.z);
   return painting;
 }

 const paiting1 = createPainting(
   "/imagenes/cos.webp",
   2,
   1,
   new THREE.Vector3(0, 0, -7.4)
 );

// const paiting2 = createPainting(
//   "/imagenes/sen.webp",
//   8,
//   4,
//   new THREE.Vector3(12, 3, -17)
// );
// const paiting3 = createPainting(
//   "/imagenes/potencia.webp",
//   8,
//   4,
//   new THREE.Vector3(0, 3, -17)
// );

scene.add(paiting1);

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
  const futurePosition = camera.position.clone().add(direction.clone().multiplyScalar(distance));

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
  const right = new THREE.Vector3().crossVectors(direction, new THREE.Vector3(0, 1, 0));
  right.normalize();

  // Calcula la nueva posición
  const futurePosition = camera.position.clone().add(right.clone().multiplyScalar(distance));

  // Verifica colisión antes de mover
  if (!checkCollision(futurePosition)) {
    camera.position.add(right.multiplyScalar(distance));
    clampCameraHeight(); // Limitar altura de la cámara
  }
}

// Función para limitar la altura de la cámara
function clampCameraHeight() {
  camera.position.y = THREE.MathUtils.clamp(camera.position.y, MIN_CAMERA_Y, MAX_CAMERA_Y);
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
