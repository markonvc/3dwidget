import React, { useContext, useEffect } from "react";
import { ProductClientContext } from "../../context/ProductAndClientContext";
import { WidgetContext } from "../../context/WidgetContext";

const LaunchButton = () => {
  const { setId } = useContext(ProductClientContext);
  const { showWidget, setShowWidget } = useContext(WidgetContext);

  useEffect(() => {
    setId("66");
  }, []);

  return (
    <div>
      <button
        id="getPlop"
        className="get_plop"
        onClick={() => setShowWidget(!showWidget)}
      >
        press
      </button>
    </div>
  );
};

export default LaunchButton;
