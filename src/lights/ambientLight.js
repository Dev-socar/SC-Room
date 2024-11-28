import * as THREE from "three";

export const createAmbientLight = () => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 2);
  return ambientLight;
};
