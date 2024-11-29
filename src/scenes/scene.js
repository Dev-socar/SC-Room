import * as THREE from "three";
import { createAmbientLight } from "../lights/ambientLight.js";

const ligths = [
  {
    position: [-32,5,0]
  },
  {
    position: [32,5,0]
  },

]

export const createScene = () => {
  const scene = new THREE.Scene();

  function addLights(scene) {
    ligths.forEach(({ position }) => {
      const [x, y, z] = position || [0, 0, 0];
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

      
      directionalLight.position.set(x, y, z); 
      directionalLight.target.position.set(0, 0, 0); 

      directionalLight.castShadow = true;
      directionalLight.distance = 10; 
      directionalLight.decay = 2; 

      
      directionalLight.shadow.camera.near = 1; 
      directionalLight.shadow.camera.far = 10; 
      scene.add(directionalLight);
      scene.add(directionalLight.target);
    });
  }
  scene.add(createAmbientLight());
  addLights(scene)
  return scene;
};
