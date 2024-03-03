import { defineConfig } from "vite";

import paths from "vite-tsconfig-paths";

import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [paths(), solid()],
});
