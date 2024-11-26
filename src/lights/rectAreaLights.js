import * as THREE from "three";
import { RectAreaLightHelper } from "three-stdlib";

export const createRectAreaLight = (
  color,
  intensity,
  width,
  height,
  position,
  target,
  scene
) => {
  const rectLight = new THREE.RectAreaLight(color, intensity, width, height);
  rectLight.position.set(...position);
  rectLight.lookAt(...target);
  
  const helper = new RectAreaLightHelper(rectLight);
  rectLight.add(helper);

  scene.add(rectLight);
};

