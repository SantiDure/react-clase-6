import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import serchImages from "./api";

const root = ReactDOM.createRoot(document.getElementById("root"));
serchImages();
root.render(<App />);
