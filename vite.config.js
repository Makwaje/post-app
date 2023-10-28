import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), macrosPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
