import { createRectAreaLight } from "./rectAreaLights.js";

export const loadCeilingLampsLight = (scene) => {
    const lights = [
      { position: [-4, 2.85, -2], target: [-4, 0, -2] },
      { position: [-4, 2.85, 2], target: [-4, 0, 2] },
      { position: [4, 2.85, 2], target: [4, 0, 2] },
      { position: [4, 2.85, -2], target: [4, 0, -2] },
      { position: [28, 2.85, -3], target: [28, 0, -3] }, //LA
      { position: [20, 2.85, -3], target: [20, 0, -3] },
      { position: [20, 2.85, 3], target: [20, 0, 3] },
      { position: [28, 2.85, 3], target: [28, 0, 3] },
    ];
    
    lights.forEach(light => {
        createRectAreaLight(
          0xffffff,
          60,
          0.8,
          0.8,
          light.position,
            light.target,
          scene
        );
    })
}
