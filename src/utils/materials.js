import * as THREE from "three";

export const createMaterial = () => {
  return new THREE.MeshStandardMaterial({
    color: 0x555555,
    roughness: 0.8,
    metalness: 0.2,
  });
};
