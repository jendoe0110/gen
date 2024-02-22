// Import Three.js library
import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a red color material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Create a sphere geometry
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Create a sphere mesh with the material and geometry
const sphere = new THREE.Mesh(geometry, material);

// Add the sphere to the scene
scene.add(sphere);

// Add a texture with reflection
const textureLoader = new THREE.TextureLoader();
const reflectionTexture = textureLoader.load('path/to/your/reflection_texture.jpg');
const reflectionMaterial = new THREE.MeshBasicMaterial({ map: reflectionTexture });
sphere.material = reflectionMaterial;

// Add animation to rotate the sphere
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
});

// Add header and footer elements
const header = document.createElement('h1');
header.textContent = 'Adventures in AR';
document.body.appendChild(header);

const footer = document.createElement('footer');
footer.textContent = 'Your Name ©';
document.body.appendChild(footer);
