import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ajuste o 'base' se for publicar em GitHub Pages como projeto:
// Ex.: base: "/biblioteca_universitaria/"
export default defineConfig({
  plugins: [react()],
  base: "/biblioteca_universitaria/"
});


