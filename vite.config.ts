import path from "path"

import react from "@vitejs/plugin-react-swc"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/app"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
})
