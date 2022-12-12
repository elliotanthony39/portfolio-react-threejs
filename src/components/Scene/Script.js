import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

//Global variables
let currentRef = null;
const timeline = new gsap.timeline(
  {
    defaults: {
      duration: 2,
    },
  }
);

gsap.registerPlugin(ScrollTrigger);

const stimeline = new gsap.timeline();

//Scene, camera, renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xbfe3dd );
const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 100);
scene.add(camera);
camera.position.set(10, 5, 25);
camera.lookAt(new THREE.Vector3());

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.physicallyCorrectLights = true;
//renderer.toneMapping = THREE.ACESFilmicToneMapping
//renderer.toneMappingExposure = 1.5
renderer.setSize(100, 100);

//OrbitControls
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;

//Resize canvas
const resize = () => {
  renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
  camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);

//Animate the scene
const animate = () => {
  orbitControls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();

// cube

/*const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial()
);
scene.add(cube);
cube.position.set(4,3.5,2);*/

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("./texture/galaxy.jpg");

//Load model 3D

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./draco/');

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.load('./model/islandend.glb',
  (gltf) => {
    //scene.add(gltf.scene)
    while (gltf.scene.children.length) {
      scene.add(gltf.scene.children[0])
    };
    castingShadow();
    portal();
  },
  () => {
    console.log("Progress...")
  },
  () => {
    console.log("Error")
  }
);

//Cast and recieve shadow
const castingShadow = () => {
  scene.traverse((child) => {
    if(child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
};

const portal = () => {
  scene.traverse((child) => {

    if(child.name === 'portal') {
      child.material = new THREE.MeshMatcapMaterial({
        matcap: matcap
      });
    }
  });
};

//Lights ---> .bias and .normalBias fixed shadow problem
const light1 = new THREE.DirectionalLight(0xffffff,2.5);
light1.position.set(7,7,7);
light1.castShadow = true;
//light1.shadow.mapSize.set(1024, 1024)
light1.shadow.bias = 0.0005;
light1.shadow.normalBias = 1.0005;
scene.add(light1);

const al = new THREE.AmbientLight(0xffffff,0.1);
scene.add(al);

const envMap = new THREE.CubeTextureLoader().load([
  './envmap/px.png',
  './envmap/nx.png',
  './envmap/py.png',
  './envmap/ny.png',
  './envmap/pz.png',
  './envmap/nz.png',
]);

scene.environment = envMap;

//Axis help
/*
const axesHelper = new THREE.AxesHelper( 15 );
scene.add( axesHelper );
*/

//Init and mount the scene
export const initScene = (mountRef) => {
  currentRef = mountRef.current;
  resize();
  currentRef.appendChild(renderer.domElement);
};

//Dismount and clena up the buffer from the scene
export const cleanUpScene = () => {
  scene.dispose();
  currentRef.removeChild(renderer.domElement);
};

// Animation with GSAP
export const moveIsland = () => {
  timeline.from(orbitControls.target, {
    x: 40,
  },"+=0.5")
  .to(orbitControls.target, {
    x: 0,
    y: 3.5,
    z: -3
  });
};

export const moveOne = () => {
  stimeline.to(camera.position, {
    x: 3,
    y: 3.5,
    z: 3,
    scrollTrigger: {
      trigger: ".welcome",
      start: "top top",
      end: "+=1200",
      scrub: 0.6,
      invalidateOnRefresh: true
    }
  })
  .to(camera.position, {
      x: -1,
      y: 2,
      z: 9,
      scrollTrigger: {
        trigger: ".about-me",
        start: "bottom bottom",
        end: "+=2500",
        scrub: 0.6,
        invalidateOnRefresh: true
      }
    }
  )
};

// Checkpoints for animations 

/*               x  y   z  primera movida
  orbit control -1 3.5 -3
  camara         3 3.5  3
segundo movida
  orbit control -1  3   1
  camara        -1  3.5 5
*/