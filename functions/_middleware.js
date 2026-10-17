export function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "tgab.net" || url.hostname === "www.tgab.net") {
    url.protocol = "https:";
    url.hostname = "tgab.com";
    return Response.redirect(url, 308);
  }

  return context.next();
}
