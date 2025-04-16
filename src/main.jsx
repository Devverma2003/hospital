import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
// 👈 NEW


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>  {/* ✅ Only One Router Here */}
    <App />
  </Router>
);
