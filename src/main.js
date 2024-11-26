import * as THREE from "three";
import { PointerLockControls,RectAreaLightHelper } from "three-stdlib";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

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
document.body.appendChild(renderer.domElement);


// Crear luz ambiental con un tono oscuro
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Luz gris oscuro con baja intensidad
scene.add(ambientLight);

// Crear una luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz blanca con intensidad 1
directionalLight.position.set(0, 10, 0); // Posición de la luz en (0, 10, 0)
directionalLight.target.position.set(0, 0, 0); // Apunta hacia el origen (0, 0, 0)

// Agregar la luz y su objetivo a la escena
scene.add(directionalLight);
scene.add(directionalLight.target);



// Material básico para aplicar a los meshes (si es necesario)
const material = new THREE.MeshStandardMaterial({
  color: 0x555555,
  roughness: 0.8,
  metalness: 0.2,
});

const fbxLoader = new FBXLoader();
fbxLoader.load(
  "/modelos-3D/silla.fbx",
  (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = material; // Asigna material personalizado si es necesario
        child.material.transparent = false;
      }
    });

    // Escala y posición
    object.scale.set(0.02, 0.02, 0.02);
    object.position.set(4, -3, 0); // Ajusta la posición en Y para asegurarte de que no esté bajo el suelo
    object.rotation.y = Math.PI / 2

    scene.add(object); // Agregar a la escena
  },
  (xhr) => {
    console.log(`Carga en progreso: ${(xhr.loaded / xhr.total) * 100}% completado`);
  },
  (error) => {
    console.error('Error al cargar el modelo:', error);
  }
);


const fbxLoader2 = new FBXLoader();
fbxLoader2.load(
  "/modelos-3D/silla.fbx",
  (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = material; // Asigna material personalizado si es necesario
        child.material.transparent = false;
      }
    });

    // Escala y posición
    object.scale.set(0.02, 0.02, 0.02);
    object.position.set(-4, -3, 0); // Ajusta la posición en Y para asegurarte de que no esté bajo el suelo
    object.rotation.y = -Math.PI / 2;

    scene.add(object); // Agregar a la escena
  },
  (xhr) => {
    console.log(
      `Carga en progreso: ${(xhr.loaded / xhr.total) * 100}% completado`
    );
  },
  (error) => {
    console.error("Error al cargar el modelo:", error);
  }
);



const ceilingLamp01 = new FBXLoader();
ceilingLamp01.load(
  "/modelos-3D/ceiling-lamp02.fbx",
  (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = material; // Asigna material personalizado si es necesario
        child.material.transparent = false;
      }
    });

    // Escala y posición
    object.scale.set(3, 3, 3);
    object.position.set(-4, 3, -2); // Ajusta la posición en Y para asegurarte de que no esté bajo el suelo

    scene.add(object); // Agregar a la escena
  },
  (xhr) => {
    console.log(
      `Carga en progreso: ${(xhr.loaded / xhr.total) * 100}% completado`
    );
  },
  (error) => {
    console.error("Error al cargar el modelo:", error);
  }
);

const rectLight = new THREE.RectAreaLight(0xffffff, 60, .8, .8);
rectLight.position.set(-4, 2.85, -2); 
rectLight.lookAt(-4, 0, -2);
scene.add(rectLight);

const rectLightHelper = new RectAreaLightHelper(rectLight);
rectLight.add(rectLightHelper);



const ceilingLamp02 = new FBXLoader();
ceilingLamp02.load(
  "/modelos-3D/ceiling-lamp02.fbx",
  (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = material; // Asigna material personalizado si es necesario
        child.material.transparent = false;
      }
    });

    // Escala y posición
    object.scale.set(3, 3, 3);
    object.position.set(-4, 3, 2); // Ajusta la posición en Y para asegurarte de que no esté bajo el suelo

    scene.add(object); // Agregar a la escena
  },
  (xhr) => {
    console.log(
      `Carga en progreso: ${(xhr.loaded / xhr.total) * 100}% completado`
    );
  },
  (error) => {
    console.error("Error al cargar el modelo:", error);
  }
);

const rectLight02 = new THREE.RectAreaLight(0xffffff, 60, 0.8, 0.8);
rectLight02.position.set(-4, 2.85, 2);
rectLight02.lookAt(-4, 0, 2);
scene.add(rectLight02);

const rectLightHelper02 = new RectAreaLightHelper(rectLight02);
rectLight.add(rectLightHelper02);



const ceilingLamp03 = new FBXLoader();
ceilingLamp03.load(
  "/modelos-3D/ceiling-lamp02.fbx",
  (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = material; // Asigna material personalizado si es necesario
        child.material.transparent = false;
      }
    });

    // Escala y posición
    object.scale.set(3, 3, 3);
    object.position.set(4, 3, 2); // Ajusta la posición en Y para asegurarte de que no esté bajo el suelo

    scene.add(object); // Agregar a la escena
  },
  (xhr) => {
    console.log(
      `Carga en progreso: ${(xhr.loaded / xhr.total) * 100}% completado`
    );
  },
  (error) => {
    console.error("Error al cargar el modelo:", error);
  }
);

const rectLight03 = new THREE.RectAreaLight(0xffffff, 60, 0.8, 0.8);
rectLight03.position.set(4, 2.85, 2);
rectLight03.lookAt(4, 0, 2);
scene.add(rectLight03);

const rectLightHelper03 = new RectAreaLightHelper(rectLight03);
rectLight.add(rectLightHelper03);


const ceilingLamp04 = new FBXLoader();
ceilingLamp04.load(
  "/modelos-3D/ceiling-lamp02.fbx",
  (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = material; // Asigna material personalizado si es necesario
        child.material.transparent = false;
      }
    });

    // Escala y posición
    object.scale.set(3, 3, 3);
    object.position.set(4, 3, -2); // Ajusta la posición en Y para asegurarte de que no esté bajo el suelo

    scene.add(object); // Agregar a la escena
  },
  (xhr) => {
    console.log(
      `Carga en progreso: ${(xhr.loaded / xhr.total) * 100}% completado`
    );
  },
  (error) => {
    console.error("Error al cargar el modelo:", error);
  }
);

const rectLight04 = new THREE.RectAreaLight(0xffffff, 60, 0.8, 0.8);
rectLight04.position.set(4, 2.85, -2);
rectLight04.lookAt(4, 0, -2);
scene.add(rectLight04);

const rectLightHelper04 = new RectAreaLightHelper(rectLight04);
rectLight04.add(rectLightHelper04);


//controls
document.addEventListener("keydown", onKeyDown, false);

// Cargar la textura para el piso usando TextureLoader
const textureLoader = new THREE.TextureLoader();
const textureFloor = textureLoader.load(
  "texture-floor2.jpg",
  function (texture) {
    // Ajustar la repetición de la textura
    texture.wrapS = THREE.RepeatWrapping; // Repetir en el eje S (horizontal)
    texture.wrapT = THREE.RepeatWrapping; // Repetir en el eje T (vertical)
    texture.repeat.set(5, 5); // Número de repeticiones en ambos ejes
  }
);

// Crear la geometría del piso
const planeGeometry = new THREE.PlaneGeometry(70, 55);

// Crear el material con la textura
const planeMaterial = new THREE.MeshStandardMaterial({
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
  texture.repeat.set(2, 2); // Número de repeticiones (ajusta según sea necesario)
});

// Crear el material con la textura
const wallMaterial = new THREE.MeshStandardMaterial({
  map: wallTexture, // Aplicar la textura
  side: THREE.DoubleSide, // Asegura que se renderice en ambas caras si es necesario
});

const wallGroup = new THREE.Group();
scene.add(wallGroup);

const wall1 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall1.position.z = -7.5;

const wall2 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall2.position.x = 7.5;
wall2.position.z = -17.5;
wall2.rotation.y = Math.PI / 2;

const wall3 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall3.position.x = 15;
wall3.position.z = -27.5;

const wall4 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall4.position.x = 22.5;
wall4.position.z = -17.5;
wall4.rotation.y = Math.PI / 2;

const wall5 = new THREE.Mesh(
  new THREE.BoxGeometry(17, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall5.position.x = 24;
wall5.position.z = -7.5;

const wall6 = new THREE.Mesh(
  new THREE.BoxGeometry(6, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall6.position.x = 15.5;
wall6.position.z = -4.5;
wall6.rotation.y = Math.PI / 2;

const wall7 = new THREE.Mesh(
  new THREE.BoxGeometry(17, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall7.position.x = 24;
wall7.position.z = 7.5;

const wall8 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall8.position.x = 22.5;
wall8.position.z = 17.5;
wall8.rotation.y = Math.PI / 2;

const wall9 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall9.position.x = 15;
wall9.position.z = 27.5;

const wall10 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall10.position.x = 7.5;
wall10.position.z = 17.5;
wall10.rotation.y = Math.PI / 2;

const wall11 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall11.position.z = 7.5;

const wall12 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall12.position.x = -7.5;
wall12.position.z = 17.5;
wall12.rotation.y = Math.PI / 2;

const wall13 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall13.position.x = -15;
wall13.position.z = 27.5;

const wall14 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall14.position.x = -22.5;
wall14.position.z = 17.5;
wall14.rotation.y = Math.PI / 2;

const wall15 = new THREE.Mesh(
  new THREE.BoxGeometry(17, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall15.position.x = -24;
wall15.position.z = 7.5;

const wall16 = new THREE.Mesh(
  new THREE.BoxGeometry(6, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall16.position.x = -15.5;
wall16.position.z = 4.5;
wall16.rotation.y = Math.PI / 2;

const wall17 = new THREE.Mesh(
  new THREE.BoxGeometry(17, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall17.position.x = -24;
wall17.position.z = -7.5;

const wall18 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall18.position.x = -22.5;
wall18.position.z = -17.5;
wall18.rotation.y = Math.PI / 2;

const wall19 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall19.position.x = -15;
wall19.position.z = -27.5;

const wall20 = new THREE.Mesh(
  new THREE.BoxGeometry(20, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall20.position.x = -7.5;
wall20.position.z = -17.5;
wall20.rotation.y = Math.PI / 2;

const wall21 = new THREE.Mesh(
  new THREE.BoxGeometry(6, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall21.position.x = 15.5;
wall21.position.z = 4.5;
wall21.rotation.y = Math.PI / 2;

const wall22 = new THREE.Mesh(
  new THREE.BoxGeometry(6, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall22.position.x = -15.5;
wall22.position.z = -4.5;
wall22.rotation.y = Math.PI / 2;

const wall23= new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall23.position.x = -32.5;
wall23.position.z = 0;
wall23.rotation.y = Math.PI / 2;

const wall24 = new THREE.Mesh(
  new THREE.BoxGeometry(15, 7, 0.5),
  wallMaterial // Usar el material con textura
);
wall24.position.x = 32.5;
wall24.position.z = 0;
wall24.rotation.y = Math.PI / 2;



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
  wall20,
  wall21,
  wall22,
  wall23,
  wall24
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

const ceilingMaterial = new THREE.MeshStandardMaterial({
  map: textureCeiling, // Aplicar la textura al material
  side: THREE.DoubleSide,
});

const ceilingGeometry = new THREE.PlaneGeometry(70, 55);
const ceilingPlane = new THREE.Mesh(ceilingGeometry,ceilingMaterial)
ceilingPlane.rotation.x = Math.PI / 2;
ceilingPlane.position.y = 3.5;

scene.add(ceilingPlane);

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
const spotLight = new THREE.SpotLight(0xFFFFFF, 60); // Luz blanca con intensidad 1
spotLight.position.set(0, 5, -7); // Posición en el techo sobre el cuadro
spotLight.target.position.set(0, 0, -7.1); // Apunta hacia el cuadro

// Opcional: Ajustar ángulo y suavidad
spotLight.angle = Math.PI / 4; // Ángulo del haz
spotLight.distance = 0
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
