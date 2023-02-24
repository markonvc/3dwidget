import React, { useContext, useEffect, useRef } from "react";
import { ProductClientContext } from "../../context/ProductAndClientContext";
import { WidgetContext } from "../../context/WidgetContext";

const LaunchButton = () => {
  const launchButton = useRef(null);
  const { setId } = useContext(ProductClientContext);
  const { showWidget, setShowWidget } = useContext(WidgetContext);

  function ShowHideWidget() {
    setShowWidget(!showWidget);
  }

  useEffect(() => {
    setId("66");
  }, []);

  return (
    <div>
      <button
        ref={launchButton}
        id="getPlop"
        className="get_plop"
        onClick={() => ShowHideWidget()}
      >
        press
      </button>
    </div>
  );
};

export default LaunchButton;
