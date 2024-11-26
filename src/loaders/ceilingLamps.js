import { loadFBXModel } from "./fbxLoader.js";

export const loadCeilingLamps = (scene, material) => {
  const lampPositions = [
    [-4, 3, -2],//Principal
    [-4, 3, 2],
    [4, 3, 2],
    [4, 3, -2],
    [28, 3, -3],//LA
    [20, 3, -3],
    [20, 3, 3],
    [28,3,3]
  ];

  lampPositions.forEach((position) => {
    loadFBXModel(
      "/modelos-3D/ceiling-lamp02.fbx",
      material,
      position,
      [3, 3, 3],
      0,
      scene
    );
  });
};
