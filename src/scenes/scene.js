import * as THREE from "three";
import { createAmbientLight } from "../lights/ambientLight.js";
import { createDirectionalLight } from "../lights/directionalLight.js";

export const createScene = () => {
  const scene = new THREE.Scene();

  // Luces
  scene.add(createAmbientLight());
  // const { light, target } = createDirectionalLight();
  // scene.add(light);
  // scene.add(target);

  return scene;
};
