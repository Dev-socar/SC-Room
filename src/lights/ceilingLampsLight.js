import { createRectangularPanel } from "./rectAreaLights.js";

export const loadCeilingLampsLight = (scene) => {
  const lights = [
    { position: [-4, 2.85, -2] },
    { position: [-4, 2.85, 2]},
    { position: [4, 2.85, 2] },
    { position: [4, 2.85, -2]},
    { position: [28, 2.85, -3] }, //LA
    { position: [20, 2.85, -3] },
    { position: [20, 2.85, 3]},
    { position: [28, 2.85, 3]},
    { position: [-28, 2.85, -3] }, //LM
    { position: [-20, 2.85, -3] },
    { position: [-20, 2.85, 3] },
    { position: [-28, 2.85, 3] },
    { position: [12, 2.85, -22] }, //LCC
    { position: [12, 2.85, -15] },
    { position: [18, 2.85, -22] },
    { position: [18, 2.85, -15] },
    { position: [12, 2.85, 22] }, //LIS
    { position: [12, 2.85, 15] },
    { position: [18, 2.85, 22] },
    { position: [18, 2.85, 15] },
    { position: [-12, 2.85, 22] }, //LEM
    { position: [-12, 2.85, 15] },
    { position: [-18, 2.85, 22] },
    { position: [-18, 2.85, 15] },
    { position: [-12, 2.85, -22] }, //LIC
    { position: [-12, 2.85, -15] },
    { position: [-18, 2.85, -22] },
    { position: [-18, 2.85, -15] },
  ];

  lights.forEach((light) => {
    createRectangularPanel(
      0.8,
      0.8,
      light.position,
      scene
    );
  });
};
