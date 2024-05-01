// Configuración de la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creación del conejo
const rabbitGeometry = new THREE.Group();

// Cuerpo
const bodyGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
body.position.y = 0.5;
rabbitGeometry.add(body);

// Cabeza
const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1;
rabbitGeometry.add(head);

// Orejas
const earGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 32);
const earMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const leftEar = new THREE.Mesh(earGeometry, earMaterial);
leftEar.position.x = -0.2;
leftEar.position.y = 1.2;
leftEar.rotation.z = Math.PI / 4;
const rightEar = new THREE.Mesh(earGeometry, earMaterial);
rightEar.position.x = 0.2;
rightEar.position.y = 1.2;
rightEar.rotation.z = -Math.PI / 4;
rabbitGeometry.add(leftEar, rightEar);

// Agregar el conejo a la escena
scene.add(rabbitGeometry);

// Animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();