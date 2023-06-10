import { configDefaults, defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  test: {
    exclude: [...configDefaults.exclude, "src/test/*"],
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["vuetify"],
    },
  },
});
