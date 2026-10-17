import assert from "node:assert/strict";
import test from "node:test";
import { onRequest } from "../functions/_middleware.js";

test("alternate TGAB hosts redirect to the canonical host", () => {
  for (const host of ["tgab.net", "www.tgab.net"]) {
    const request = new Request(`https://${host}/cookies/?source=search`);
    const response = onRequest({ request, next: () => { throw new Error("should redirect"); } });

    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), "https://tgab.com/cookies/?source=search");
  }
});

test("canonical and preview hosts continue to the site", () => {
  for (const host of ["tgab.com", "tgab-site.pages.dev"]) {
    const request = new Request(`https://${host}/cookies/`);
    const response = new Response("site");

    assert.equal(onRequest({ request, next: () => response }), response);
  }
});
