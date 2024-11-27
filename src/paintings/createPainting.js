import * as THREE from 'three'

export function createPainting(url, w, h, p) {
  const textureLoader = new THREE.TextureLoader();
  const paintingTexture = textureLoader.load(url);
  const paintingMaterial = new THREE.MeshStandardMaterial({
    map: paintingTexture,
  });
  const paintingGeometry = new THREE.PlaneGeometry(w, h);
  const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
  painting.position.set(p.x, p.y, p.z);
  return painting;
}