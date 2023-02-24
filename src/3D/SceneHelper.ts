import * as THREE from "three";
import Renderer from "./3dUtils/InitializeRendererHelter";
import Light from "./3dUtils/LightHelper";
import Camera from "./3dUtils/CameraHelper";
// import Ground from "./3dUtils/GroundHelper";
// import Store from "../store/Store";

class Viewer3D {
  createScene() {
    const element = document.querySelector(".canvas");
    const canvas = element!;
    const scene = new THREE.Scene();
    // Store.scene = scene;

    let renderer = Renderer.initializeWebGlRenderer(canvas);
    // Store.renderer = renderer;

    let camera = Camera.setCamera(scene);
    // Store.camera = camera;

    Light.addLight(scene);

    // Ground.loadGround(scene);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }
}

export default new Viewer3D();
