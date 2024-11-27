import * as THREE from "three";

export const createRectangularPanel = (width, height, position, scene) => {
  // Crear la geometría de un plano (rectángulo o cuadrado)
  const geometry = new THREE.PlaneGeometry(width, height);

  // Crear un material con color para el panel
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1, // Ajusta la opacidad si es necesario
  });

  // Crear el mesh (malla) con la geometría y el material
  const panel = new THREE.Mesh(geometry, material);

  // Posicionar el panel en la escena
  panel.position.set(...position);
  panel.rotation.x = -Math.PI / 2;

  scene.add(panel);
};
