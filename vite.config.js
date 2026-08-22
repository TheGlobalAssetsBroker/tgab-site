import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sites } from "@openai/sites-vite-plugin";

const spaWorker = () => ({
  name: "tgab-sites-spa-worker",
  apply: "build",
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: "server/index.js",
      source: `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const addSocialImage = (htmlResponse) => {
      const imageUrl = new URL("/og.png", request.url).href;
      const tags = '<meta property="og:image" content="' + imageUrl + '">' +
        '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">' +
        '<meta name="twitter:image" content="' + imageUrl + '">';
      return new HTMLRewriter().on("head", {
        element(head) { head.append(tags, { html: true }); }
      }).transform(htmlResponse);
    };
    const isHtml = (value) => (value.headers.get("content-type") || "").includes("text/html");
    if (response.status !== 404 || request.method !== "GET") {
      return isHtml(response) ? addSocialImage(response) : response;
    }
    const acceptsHtml = (request.headers.get("accept") || "").includes("text/html");
    if (!acceptsHtml) return response;
    const indexUrl = new URL("/index.html", request.url);
    const indexResponse = await env.ASSETS.fetch(new Request(indexUrl, request));
    return addSocialImage(indexResponse);
  }
};\n`,
    });
  },
});

export default defineConfig({
  plugins: [react(), sites(), spaWorker()],
});
