import ReactDOM from "react-dom";
import { App } from "./app";

import "tailwindcss/tailwind.css";

const reactRoot = document.createElement("div");
reactRoot.classList.add("root");

document.body.append(reactRoot);

ReactDOM.render(<App />, reactRoot);
