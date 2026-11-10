// Hostname-based indexing policy: platform preview/project hosts get
// X-Robots-Tag: noindex; every other (custom) domain stays index-eligible.
const NOINDEX_HOST_SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export function isNoindexHost(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/\.$/, "");
  return NOINDEX_HOST_SUFFIXES.some((s) => h.endsWith(s) || h === s.slice(1));
}

export function applyRobotsPolicy(request: Request, response: Response): Response {
  let hostname: string;
  try {
    hostname = new URL(request.url).hostname;
  } catch {
    return response;
  }
  if (!isNoindexHost(hostname)) return response;
  const ct = response.headers.get("content-type") ?? "";
  if (!ct.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  const vary = headers.get("vary");
  if (!vary?.toLowerCase().includes("host")) headers.set("vary", vary ? `${vary}, Host` : "Host");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
