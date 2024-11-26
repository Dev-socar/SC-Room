import * as THREE from "three";

export const createDirectionalLight = () => {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz blanca con intensidad 1
  directionalLight.position.set(0, 10, 0); // Posición de la luz en (0, 10, 0)
    directionalLight.target.position.set(0, 0, 0); // Apunta hacia el origen (0, 0, 0)
    
    
  return { light: directionalLight, target: directionalLight.target };
}