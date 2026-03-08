import { defineConfig } from "vite";
import { globSync } from "glob";

export default defineConfig({
  root: "./src",
  define: {
    global: "window", // İşte bu satır o "global is not defined" hatasını kökten çözer.
  },
  build: {
    rollupOptions: {
      input: globSync("./src/*.html"),
    },
  },
});