import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/goit-js-hw-09/",
  define: {
    global: "window",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "src/index.html",
        gallery: "src/01-gallery.html",
        form: "src/02-form.html",
      },
    },
  },
});