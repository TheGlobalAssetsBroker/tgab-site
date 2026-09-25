import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { articles, articlePath } from "./src/content/insights.js";

const staticInsightPaths = new Set(["/insights", ...articles.map(articlePath)]);

export default defineConfig({
  plugins: [react(), {
    name: "preview-static-insights",
    configurePreviewServer(server) {
      // Mirror dist/_redirects so preview tests the same initial HTML as deployment.
      server.middlewares.use((request, response, next) => {
        const url = new URL(request.url, "http://localhost");
        const path = url.pathname.replace(/\/+$/, "");
        if (staticInsightPaths.has(path)) request.url = `${path}/index.html${url.search}`;
        next();
      });
    },
  }],
});
