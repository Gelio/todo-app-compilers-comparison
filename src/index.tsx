import ReactDOM from "react-dom";
import React from "react";
import { App } from "./app";

import "./index.css";

const reactRoot = document.createElement("div");
reactRoot.classList.add("root");

document.body.append(reactRoot);

window.React = React;

ReactDOM.render(<App />, reactRoot);
