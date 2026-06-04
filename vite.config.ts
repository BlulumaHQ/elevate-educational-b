// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// Nitro is force-enabled so Cloudflare CI builds get the same Worker output even
// when Lovable-specific environment variables are not present.
export default defineConfig({
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      publicDir: "dist/client",
      serverDir: "dist/server",
    },
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
      wrangler: {
        // Cloudflare validation can reject Nitro's no-bundle multi-module graph
        // even when the referenced files exist. Let Wrangler bundle the generated
        // Worker so imports like ./_libs/unenv.mjs are inlined before upload.
        no_bundle: false,
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
