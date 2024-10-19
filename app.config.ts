import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  vite: {
    plugins: [UnoCSS()]
  },
  server: {
    prerender: {
      crawlLinks: true // vercel issue, doesn't currently support vinxi so everything needs to SSR to html in the static output folder
    }
  }
});
