import * as THREE from "three";

class InitializeRenderer {
  initializeWebGlRenderer = (canvas: Element) => {
    let renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    if (window.innerWidth > 999) {
      renderer.setSize(400, 256);
    } else renderer.setSize(window.innerWidth, window.innerHeight * 0.6);

    renderer.shadowMap.enabled = true;
    this.initializeDOM(renderer, canvas);

    return renderer;
  };

  initializeDOM = (renderer: any, canvas: Element) => {
    canvas.appendChild(renderer.domElement);
  };
}

export default new InitializeRenderer();
