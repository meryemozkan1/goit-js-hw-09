import { defineConfig } from "vite";
import { globSync } from "glob";

export default defineConfig({
  root: "./src",
  base: "/goit-js-hw-09/",
  define: {
    global: "window", 
    },
  build: {
    rollupOptions: {
      input: globSync("./src/*.html"),
    },
    outDir: "../dist",
  },
});