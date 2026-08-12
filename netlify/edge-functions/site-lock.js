const REALM = "360ENGAGE private area";
const PASSWORD_VARIABLE = "SITE_LOCK_PASSWORD";

function unauthorized() {
  return new Response("Authentication is required.", {
    status: 401,
    headers: {
      "Cache-Control": "no-store, private",
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
    },
  });
}

function isAuthorized(request, expectedPassword) {
  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Basic ")) return false;

  try {
    const decoded = atob(authorization.slice(6));
    const separator = decoded.indexOf(":");
    if (separator < 0) return false;
    return decoded.slice(separator + 1) === expectedPassword;
  } catch {
    return false;
  }
}

export default async (request, context) => {
  const expectedPassword = Netlify.env.get(PASSWORD_VARIABLE);

  // Fail closed: no non-homepage content is exposed until Netlify has the secret.
  if (!expectedPassword) {
    return new Response("This private area is not configured.", {
      status: 503,
      headers: { "Cache-Control": "no-store, private" },
    });
  }

  if (!isAuthorized(request, expectedPassword)) return unauthorized();
  return context.next();
};

export const config = {
  path: "/*",
  excludedPath: "/",
  onError: "fail",
};
