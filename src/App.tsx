import React, { useContext } from "react";
import { WidgetContext } from "./context/WidgetContext";
import LaunchButton from "./components/launchButton/LaunchButton";
import Widget from "./components/widget/Widget";

function App() {
  const { showWidget } = useContext(WidgetContext);

  return (
    <div>
      {showWidget && <Widget />}
      <LaunchButton />
    </div>
  );
}

export default App;
