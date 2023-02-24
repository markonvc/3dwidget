import React from "react";

import "./CloseButton.scss";

function CloseButton() {
  function closeWidget() {
    console.log("close button");
  }

  return (
    <div className="close_wrapper">
      <span
        className="close_widget"
        id="widget-close"
        onClick={() => closeWidget()}
      >
        &times;
      </span>
    </div>
  );
}

export default CloseButton;
