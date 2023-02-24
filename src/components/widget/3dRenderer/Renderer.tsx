import React, { useEffect } from "react";
import Viewer3D from "../../../3D/SceneHelper";

import "./Render.scss";

function Renderer() {
  useEffect(() => {
    Viewer3D.createScene();
  }, []);

  return <div className="canvas"></div>;
}

export default Renderer;
