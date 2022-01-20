import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CleanupApp from "./CleanupApp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CleanupApp />
  </React.StrictMode>,
  document.getElementById("root")
);
