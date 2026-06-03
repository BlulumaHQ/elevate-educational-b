import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";

const root = process.cwd();
const serverDir = resolve(root, "dist/server");
const clientDir = resolve(root, "dist/client");
const rootWranglerPath = resolve(root, "wrangler.jsonc");
const generatedWranglerPath = resolve(serverDir, "wrangler.json");
const deployPointerPath = resolve(root, ".wrangler/deploy/config.json");

function readRootWranglerConfig() {
  if (!existsSync(rootWranglerPath)) return {};
  const withoutComments = readFileSync(rootWranglerPath, "utf8")
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/,\s*([}\]])/g, "$1");
  return JSON.parse(withoutComments);
}

function firstExisting(paths) {
  return paths.find((path) => existsSync(resolve(root, path)));
}

if (!existsSync(serverDir)) {
  throw new Error("Cloudflare deploy config was not written because dist/server does not exist. Run vite build first.");
}

const workerEntry = firstExisting([
  "dist/server/index.mjs",
  "dist/server/server.js",
  "dist/server/index.js",
]);

if (!workerEntry) {
  throw new Error("Cloudflare deploy config was not written because no built Worker entry was found in dist/server.");
}

const rootConfig = readRootWranglerConfig();
const generatedConfig = {
  ...rootConfig,
  main: relative(serverDir, resolve(root, workerEntry)),
  assets: existsSync(clientDir)
    ? {
        binding: rootConfig.assets?.binding ?? "ASSETS",
        directory: relative(serverDir, clientDir),
      }
    : rootConfig.assets,
  no_bundle: true,
  rules: rootConfig.rules ?? [{ type: "ESModule", globs: ["**/*.mjs", "**/*.js"] }],
};

mkdirSync(serverDir, { recursive: true });
writeFileSync(generatedWranglerPath, `${JSON.stringify(generatedConfig, null, 2)}\n`);

mkdirSync(dirname(deployPointerPath), { recursive: true });
writeFileSync(
  deployPointerPath,
  `${JSON.stringify({ configPath: relative(dirname(deployPointerPath), generatedWranglerPath) }, null, 2)}\n`,
);

console.info(`Cloudflare deploy config ready: ${relative(root, generatedWranglerPath)} -> ${workerEntry}`);