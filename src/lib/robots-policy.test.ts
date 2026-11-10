import { describe, it, expect } from "vitest";
import { applyRobotsPolicy, isNoindexHost } from "./robots-policy";

const html = () => new Response("<html></html>", { headers: { "content-type": "text/html; charset=utf-8" } });
describe("robots policy", () => {
  it("noindexes platform hosts", () => {
    for (const h of ["elevate-educational-b.lovable.app", "x.workers.dev", "x.pages.dev", "x.netlify.app"])
      expect(isNoindexHost(h)).toBe(true);
  });
  it("keeps custom domains indexable", () => {
    expect(isNoindexHost("elevateeducation.ca")).toBe(false);
    expect(isNoindexHost("lovable.app.example.com")).toBe(false);
    const r = applyRobotsPolicy(new Request("https://elevateeducation.ca/en/about"), html());
    expect(r.headers.get("x-robots-tag")).toBeNull();
  });
  it("adds header on nested HTML routes of platform hosts only", () => {
    const r = applyRobotsPolicy(new Request("https://elevate-educational-b.lovable.app/en/courses"), html());
    expect(r.headers.get("x-robots-tag")).toBe("noindex");
    const j = applyRobotsPolicy(new Request("https://x.workers.dev/api"), new Response("{}", { headers: { "content-type": "application/json" } }));
    expect(j.headers.get("x-robots-tag")).toBeNull();
  });
});
