import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GlobalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContextProvider>
);
