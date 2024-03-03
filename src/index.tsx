/* @refresh reload */
import { render } from "solid-js/web";

import "~/styles/globals.ts";

import App from "~/App.tsx";

import { init } from "~/store/theme.ts";

init();

const root = document.getElementById("root");

render(() => <App />, root!);
