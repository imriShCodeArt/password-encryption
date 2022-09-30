import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  console.clear();
});
//  *****************************************************

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
