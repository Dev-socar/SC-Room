import { loadFBXModel } from "./fbxLoader.js";

export const loadCeilingLamps = async (scene, material) => {
  const lampPositions = [
    [-4, 3, -2], //Principal
    [-4, 3, 2],
    [4, 3, 2],
    [4, 3, -2],
    [28, 3, -3], //LA
    [20, 3, -3],
    [20, 3, 3],
    [28, 3, 3],
    [-28, 3, -3], //LA
    [-20, 3, -3],
    [-20, 3, 3],
    [-28, 3, 3],
    [12, 3, -22], //LCC
    [12, 3, -15],
    [18, 3, -22],
    [18, 3, -15],
    [12, 3, 22], //LIS
    [12, 3, 15],
    [18, 3, 22],
    [18, 3, 15],
    [-12, 3, 22], //LEM
    [-12, 3, 15],
    [-18, 3, 22],
    [-18, 3, 15],
    [-12, 3, -22], //LIC
    [-12, 3, -15],
    [-18, 3, -22],
    [-18, 3, -15],
  ];

  const loadLampPromises = lampPositions.map((position) =>
    loadFBXModel(
      "/modelos-3D/ceiling-lamp02.fbx",
      material,
      position,
      [3, 3, 3],
      0,
      scene
    )
  );

  // Esperamos que todas las lámparas se carguen antes de continuar
  try {
    await Promise.all(loadLampPromises);
    console.log("Lámparas cargadas con éxito");
  } catch (error) {
    console.error("Error al cargar algunas lámparas:", error);
  }
};
