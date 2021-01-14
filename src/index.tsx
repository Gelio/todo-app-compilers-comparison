import ReactDOM from "react-dom";
import React from "react";
import { App } from "./app";

import "tailwindcss/tailwind.css";
import "./index.css";

const reactRoot = document.createElement("div");
reactRoot.classList.add("root");

document.body.append(reactRoot);

if (["swc", "esbuild"].includes(TS_COMPILER)) {
  /**
   * swc and esbuild do not support the React 17 JSX transform. Thus, a workaround to have React in
   * the global scope.
   *
   * @see https://github.com/swc-project/swc/issues/1103
   * @see https://github.com/evanw/esbuild/issues/334
   */
  window.React = React;
}

ReactDOM.render(<App />, reactRoot);
