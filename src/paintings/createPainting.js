import * as THREE from "three";
import { paintingsData } from "./paintingsData.js"; // Importa el array con los datos de las pinturas
let paintings = []; // Declaramos el array en este archivo
// Función para crear una pintura
export function createPainting(scene) {
  paintingsData.forEach(({ url, w, h, p, info }) => {
    const textureLoader = new THREE.TextureLoader();
    const paintingTexture = textureLoader.load(url);
    const paintingMaterial = new THREE.MeshStandardMaterial({
      map: paintingTexture,
      transparent: true,
    });
    const paintingGeometry = new THREE.BoxGeometry(w, h, 0.1);
    const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
    painting.position.set(p.x, p.y, p.z);

    painting.info = info; // Guardamos la info de la pintura en el objeto

    paintings.push(painting); // Guardamos la pintura en el array

    scene.add(painting);
  });
}
// Exportamos el array de pinturas para poder acceder a él en el archivo principal
export { paintings };