import { parse } from "twemoji-parser";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = decodeURIComponent(url.pathname);
  const options = {
    assetType: /\.png$/.test(pathname) ? "png" : "svg"
  };
  const emoji = parse(decodeURIComponent(url.pathname), options).shift();
  return emoji
    ? Response.redirect(emoji.url, 301)
    : new Response("not found", { status: 404 });
}
