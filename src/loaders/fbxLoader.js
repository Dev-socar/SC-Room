import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export const loadFBXModel = async (
  path,
  material,
  position,
  scale,
  rotationY,
  scene
) => {
  const fbxLoader = new FBXLoader();

  return new Promise((resolve, reject) => {
    fbxLoader.load(
      path,
      (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = material;
          }
        });

        object.position.set(...position);
        object.scale.set(...scale);
        object.rotation.y = rotationY;
        scene.add(object);

        resolve(object); // Resolvemos la promesa cuando el modelo esté cargado
      },
      undefined,
      (error) => {
        reject(error); // Rechazamos la promesa si hay un error
        console.error("Error loading model:", error);
      }
    );
  });
};
