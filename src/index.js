import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

import {
    HashRouter as Router
} from "react-router-dom";

const container = document.getElementById("root");

// Create a Root Container for ReactJS
const root = ReactDOM.createRoot(container);

root.render(
    <Router>
        <App/>
    </Router>
);