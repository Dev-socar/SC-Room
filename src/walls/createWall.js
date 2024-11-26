import * as THREE from "three";
import { materialCreate } from "../utils/loadMaterial.js";
import { wallsData } from "../utils/walls.js";

export const createWalls = (scene) => {
  const wallMaterial = materialCreate("texture-walls.jpg", 2, 2);
  const wallGroup = new THREE.Group();

  wallsData.forEach((w) => {
    const [width, height, depth] = w.dimension || [1, 1, 1];
    const [x, y, z] = w.position || [0, 0, 0];
    const [rotX, rotY, rotZ] = w.rotation || [0, 0, 0];

    const wall = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      wallMaterial
    );

    wall.position.set(x, y, z);
    wall.rotation.set(rotX, rotY, rotZ);

    wallGroup.add(wall);
  });

  scene.add(wallGroup);

  // Opcional: Log para verificar las paredes creadas
  if (wallGroup.children.length === 0) {
    console.warn("No walls were created to calculate bounding boxes.");
  }

  return wallGroup;
};


export const wallsBbox = (wallGroup) => {
  if (!wallGroup || !wallGroup.children) {
    console.error("Invalid wall group provided to wallsBbox.");
    return [];
  }

  const walls = [];
  wallGroup.children.forEach((wall) => {
    const bbox = new THREE.Box3().setFromObject(wall);
    wall.BBox = bbox; // Guarda el bounding box en la pared
    walls.push(bbox);
  });

  return walls;
};
