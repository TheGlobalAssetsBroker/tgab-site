import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Writable } from "node:stream";
import App from "./App";

export function render(path) {
  return new Promise((resolve, reject) => {
    let html = "";
    const output = new Writable({
      write(chunk, encoding, callback) { html += chunk.toString(); callback(); },
    });
    output.on("finish", () => resolve(html));
    output.on("error", reject);
    const stream = renderToPipeableStream(
      <React.StrictMode><StaticRouter location={path}><App /></StaticRouter></React.StrictMode>,
      { onAllReady() { stream.pipe(output); }, onShellError: reject, onError: reject },
    );
  });
}
