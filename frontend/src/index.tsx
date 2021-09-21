import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./config/global.css";
import "./config/locale";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
