import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export const loadFBXModel = (
  path,
  material,
  position,
  scale,
  rotationY,
  scene
) => {
  const fbxLoader = new FBXLoader();
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
    },
    undefined,
    (error) => console.error("Error loading model:", error)
  );
};
