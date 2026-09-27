import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";

const sitemap = readFileSync(new URL("./public/sitemap.xml", import.meta.url), "utf8");
const staticPaths = new Set([...sitemap.matchAll(/<loc>https:\/\/tgab\.com(\/[^<]*)<\/loc>/g)].map(([, path]) => path));

export default defineConfig({
  plugins: [react(), {
    name: "preview-static-pages",
    configurePreviewServer(server) {
      // Mirror dist/_redirects so preview tests the same initial HTML as deployment.
      server.middlewares.use((request, response, next) => {
        const url = new URL(request.url, "http://localhost");
        const path = url.pathname.replace(/\/+$/, "");
        if (path && staticPaths.has(path)) request.url = `${path}/index.html${url.search}`;
        next();
      });
    },
  }],
});
