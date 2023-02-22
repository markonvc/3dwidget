import React, { useContext } from "react";
import LaunchButton from "./components/launchButton/LaunchButton";
import Widget from "./components/widget/Widget";

function App() {
  return (
    <div>
      <Widget />
      <LaunchButton />
    </div>
  );
}

export default App;
