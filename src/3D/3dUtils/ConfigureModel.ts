import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
class ConfigureModel {
  loadModel(newModel, scene) {
    let model;

    const modelUrl = ModelUrls[newModel].modelUrl;
    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        model.name = newModel;
        model.scale.set(3, 3, 3);
        model.position.z = 10;
        model.position.x = -1;
        model.position.y = 1;
        // model.position.y = 1;
        scene.add(model);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log(error);
      }
    );
  }
}

export default new ConfigureModel();
