/**
 * STARTER DIDÁTICO — NÃO É PARA COPIAR SEM DISCUSSÃO.
 * Construa por etapas com o tutor.
 * Objetivo final: start | status | refresh | close
 */

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { basename, resolve } from "node:path";
import { realpathSync } from "node:fs";

function tryGitRoot(cwd: string): string | null {
  try {
    const out = execFileSync("git", ["rev-parse", "--show-toplevel"], {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

function resolveProjectRoot(): string {
  const cwd = process.cwd();
  const root = tryGitRoot(cwd) ?? cwd;
  return realpathSync(resolve(root));
}

function projectId(projectRoot: string): string {
  return createHash("sha256").update(projectRoot).digest("hex").slice(0, 8);
}

// TODO com o aluno:
// - agentHome()
// - registryPath()
// - loadRegistry()
// - saveRegistry()
// - slugify()
// - ensureProjectRuntime()
// - refreshAutoContext()
// - start()
// - status()
// - close()

const command = process.argv[2] ?? "start";
const root = resolveProjectRoot();

console.log(JSON.stringify({
  starter: true,
  command,
  projectRoot: root,
  projectName: basename(root),
  projectId: projectId(root),
}, null, 2));
