import * as THREE from "three";
import { paintingsData } from "./paintingsData.js"; // Importa el array con los datos de las pinturas
let paintings = []; // Declaramos el array en este archivo
// Función para crear una pintura
export function createPainting(scene) {
  paintingsData.forEach(({ url, w, h, p, r,info }) => {
    const [rotX, rotY, rotZ] = r || [0, 0, 0];
    const textureLoader = new THREE.TextureLoader();
    const paintingTexture = textureLoader.load(url);
    const paintingMaterial = new THREE.MeshStandardMaterial({
      map: paintingTexture,
      transparent: true,
    });
    const paintingGeometry = new THREE.BoxGeometry(w, h, 0.1);
    const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
    painting.position.set(p.x, p.y, p.z);
    painting.rotation.set(rotX, rotY, rotZ);
    painting.info = info; 
    paintings.push(painting); 

    scene.add(painting);
  });
}

export { paintings };