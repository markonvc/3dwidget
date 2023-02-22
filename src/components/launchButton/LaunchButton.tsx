import React, { useContext, useEffect } from "react";
import { ProductClientContext } from "../../context/ProductAndClientContext";
import { WidgetContext } from "../../context/WidgetContext";

const LaunchButton = () => {
  const { setId } = useContext(ProductClientContext);
  const { setShowWidget } = useContext(WidgetContext);

  useEffect(() => {
    setId("66");
  }, []);

  return (
    <div>
      <button
        id="getPlop"
        className="get_plop"
        onClick={() => setShowWidget(true)}
      >
        press
      </button>
    </div>
  );
};

export default LaunchButton;
