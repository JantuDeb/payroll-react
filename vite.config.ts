import path from "node:path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/ui/components"),
      "@pages": path.resolve(__dirname, "./src/ui/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@common": path.resolve(__dirname, "./src/ui/core"),
      "@layouts": path.resolve(__dirname, "./src/ui/layouts"),
    },
  },
})
