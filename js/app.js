function createRotatingSquare(container) {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(containerWidth, containerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const textureLoader = new THREE.TextureLoader();
  const mainTexture = textureLoader.load(container.dataset.imageSrc);
  const sideTexture = textureLoader.load(container.dataset.sideImageSrc);

  const materials = [
    new THREE.MeshStandardMaterial({ map: mainTexture }),
    new THREE.MeshStandardMaterial({ map: mainTexture }),
    new THREE.MeshStandardMaterial({ map: mainTexture }),
    new THREE.MeshStandardMaterial({ map: sideTexture }),
    new THREE.MeshStandardMaterial({ map: mainTexture }),
    new THREE.MeshStandardMaterial({ map: sideTexture }),
  ];

  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1, 100);
  pointLight.position.set(3, 3, 3);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  scene.add(pointLight);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const cube = new THREE.Mesh(geometry, materials);
  cube.castShadow = true;
  cube.receiveShadow = true;
  scene.add(cube);

  camera.position.z = 3;

  const animate = function () {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  };

  animate();
}

const squareContainers = document.querySelectorAll('.squareContainer');
squareContainers.forEach((container) => {
  createRotatingSquare(container);
});
