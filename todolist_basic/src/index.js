import React from "react";
import ReactDOM from "react-dom";
import App from "./todo";
import App2 from "./coin_tracker";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);
