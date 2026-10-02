import { defineConfig } from "vite";
import pandacss from "@pandacss/vite";
import react from "@vitejs/plugin-react-swc";
// import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pandacss(), react()],
  resolve: {
    tsconfigPaths: true,
  },
});
