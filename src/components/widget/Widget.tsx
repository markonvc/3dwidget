import React from "react";
import CloseButton from "./closeButton/CloseButton";
import Renderer from "./3dRenderer/Renderer";
import "./Widget.scss";

function Widget() {
  return (
    <div id="get-plop-modal" className="get_plop_modal">
      <CloseButton />
      <Renderer />
    </div>
  );
}

export default Widget;
