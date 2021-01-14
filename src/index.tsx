import ReactDOM from "react-dom";
import React from "react";
import { App } from "./app";

import "tailwindcss/tailwind.css";
import "./index.css";

const reactRoot = document.createElement("div");
reactRoot.classList.add("root");

document.body.append(reactRoot);

if (TS_COMPILER === "swc") {
  /**
   * swc does not support the React 17 JSX transform. Thus, a workaround to have React in the global
   * scope.
   *
   * @see https://github.com/swc-project/swc/issues/1103
   */
  window.React = React;
}

ReactDOM.render(<App />, reactRoot);
