import * as THREE from "three";

export function materialCreate(texturePath, repeatX, repeatY) {
  const textureLoader = new THREE.TextureLoader(); // Instancia del TextureLoader

  const texture = textureLoader.load(texturePath, function (loadedTexture) {
    // Ajustar la repetición de la textura
    loadedTexture.wrapS = THREE.RepeatWrapping; // Repetir en el eje S (horizontal)
    loadedTexture.wrapT = THREE.RepeatWrapping; // Repetir en el eje T (vertical)
    loadedTexture.repeat.set(repeatX, repeatY); // Número de repeticiones
  });

  // Crear el material con la textura
  const material = new THREE.MeshStandardMaterial({
    map: texture, // Aplicar la textura
    side: THREE.DoubleSide, // Asegura que se renderice en ambas caras si es necesario
  });

  return material;
}
