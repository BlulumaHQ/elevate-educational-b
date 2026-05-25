import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://elevate-educational-b.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
  alternates?: Array<{ hreflang: string; path: string }>;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          {
            path: "/",
            changefreq: "weekly",
            priority: "1.0",
            alternates: [
              { hreflang: "zh-Hant", path: "/" },
              { hreflang: "en", path: "/en" },
              { hreflang: "x-default", path: "/" },
            ],
          },
          { path: "/about", changefreq: "monthly", priority: "0.8", alternates: [
            { hreflang: "zh-Hant", path: "/about" },
            { hreflang: "en", path: "/en/about" },
          ]},
          { path: "/study-in-vancouver", changefreq: "monthly", priority: "0.8", alternates: [
            { hreflang: "zh-Hant", path: "/study-in-vancouver" },
            { hreflang: "en", path: "/en/study-in-vancouver" },
          ]},
          { path: "/services", changefreq: "monthly", priority: "0.9", alternates: [
            { hreflang: "zh-Hant", path: "/services" },
            { hreflang: "en", path: "/en/services" },
          ]},
          { path: "/courses", changefreq: "monthly", priority: "0.9", alternates: [
            { hreflang: "zh-Hant", path: "/courses" },
            { hreflang: "en", path: "/en/courses" },
          ]},
          { path: "/consultation", changefreq: "monthly", priority: "0.9", alternates: [
            { hreflang: "zh-Hant", path: "/consultation" },
            { hreflang: "en", path: "/en/consultation" },
          ]},
          { path: "/contact", changefreq: "monthly", priority: "0.7", alternates: [
            { hreflang: "zh-Hant", path: "/contact" },
            { hreflang: "en", path: "/en/contact" },
          ]},
          // English versions
          { path: "/en", changefreq: "weekly", priority: "1.0", alternates: [
            { hreflang: "en", path: "/en" },
            { hreflang: "zh-Hant", path: "/" },
            { hreflang: "x-default", path: "/" },
          ]},
          { path: "/en/about", changefreq: "monthly", priority: "0.8" },
          { path: "/en/study-in-vancouver", changefreq: "monthly", priority: "0.8" },
          { path: "/en/services", changefreq: "monthly", priority: "0.9" },
          { path: "/en/courses", changefreq: "monthly", priority: "0.9" },
          { path: "/en/consultation", changefreq: "monthly", priority: "0.9" },
          { path: "/en/contact", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) => {
          const lines: Array<string | null> = [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
          ];
          if (e.alternates) {
            for (const alt of e.alternates) {
              lines.push(
                `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${BASE_URL}${alt.path}" />`,
              );
            }
          }
          lines.push(`  </url>`);
          return lines.filter(Boolean).join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
