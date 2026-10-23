/* 360-engage-website on Cloudflare Workers. Static files are dist/ (ASSETS binding). The Netlify edge function
   netlify/edge-functions/site-lock.js (Basic auth on everything except "/") runs here unchanged: Netlify.env.get is
   shimmed to the Worker env and context.next() becomes env.ASSETS.fetch(request). Secret: SITE_LOCK_PASSWORD. */
import siteLock from "../netlify/edge-functions/site-lock.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") return env.ASSETS.fetch(request);           // config.excludedPath: "/"
    globalThis.Netlify = { env: { get: (k) => env[k] } };
    try {
      return await siteLock(request, { next: () => env.ASSETS.fetch(request) });
    } catch {
      return new Response("Internal error", { status: 500 });              // onError: "fail"
    }
  },
};
