import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface ProjectEntry {
  name: string;
  path: string;
  runtimeDir: string;
  lastUsedAt: string;
}

export interface Registry {
  version: number;
  projects: Record<string, ProjectEntry>;
}

export interface SafeMetadata {
  projectName: string;
  projectPath: string;
  gitBranch: string;
  detectedStack: string;
  packageManager: string;
  scripts: string;
  lastRefreshed: string;
}

/**
 * 1. Descobrir a raiz real do projeto.
 * Tenta obter a raiz do Git (mesmo de dentro de subpastas).
 * Fallback para process.cwd().
 */
export function resolveProjectRoot(): string {
  try {
    const gitRoot = execSync('git rev-parse --show-toplevel', {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (gitRoot && fs.existsSync(gitRoot)) {
      return path.resolve(gitRoot);
    }
  } catch {}
  return path.resolve(process.cwd());
}

/**
 * 2. Gerar um slug legível a partir do nome da pasta.
 */
export function getProjectSlug(projectPath: string): string {
  const base = path.basename(projectPath);
  return base.replace(/[^a-zA-Z0-9-_]/g, '_') || 'project';
}

/**
 * 3. Gerar um ID estável e único baseado no caminho absoluto do projeto.
 */
export function generateProjectId(projectPath: string): string {
  const normalized = path.resolve(projectPath).toLowerCase();
  return crypto.createHash('sha256').update(normalized).digest('hex').slice(0, 8);
}

/**
 * 4. Localizar ou criar a pasta ~/.dev-agent no diretório do usuário.
 */
export function getDevAgentDir(): string {
  const homeDir = os.homedir();
  const devAgentDir = path.join(homeDir, '.dev-agent');
  const projectsDir = path.join(devAgentDir, 'projects');

  if (!fs.existsSync(devAgentDir)) {
    fs.mkdirSync(devAgentDir, { recursive: true });
  }
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  return devAgentDir;
}

/**
 * 5. Carregar ou inicializar o registry.json.
 */
export function loadRegistry(): Registry {
  const devAgentDir = getDevAgentDir();
  const registryPath = path.join(devAgentDir, 'registry.json');

  if (!fs.existsSync(registryPath)) {
    return { version: 1, projects: {} };
  }

  try {
    const raw = fs.readFileSync(registryPath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return { version: 1, projects: {} };
  }
}

/**
 * 6. Salvar o registry.json no disco.
 */
export function saveRegistry(registry: Registry): void {
  const devAgentDir = getDevAgentDir();
  const registryPath = path.join(devAgentDir, 'registry.json');
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf-8');
}

/**
 * 7. Identificar ou cadastrar o projeto no registry.
 */
export function registerOrUpdateProject(projectRoot: string): {
  projectId: string;
  projectName: string;
  runtimeFolderName: string;
  runtimePath: string;
  isNew: boolean;
} {
  const slug = getProjectSlug(projectRoot);
  const projectId = generateProjectId(projectRoot);
  const runtimeFolderName = `${slug}-${projectId}`;
  const devAgentDir = getDevAgentDir();
  const runtimePath = path.join(devAgentDir, 'projects', runtimeFolderName);

  const registry = loadRegistry();
  const isNew = !registry.projects[projectId];

  registry.projects[projectId] = {
    name: slug,
    path: projectRoot,
    runtimeDir: runtimeFolderName,
    lastUsedAt: new Date().toISOString(),
  };

  saveRegistry(registry);

  return {
    projectId,
    projectName: slug,
    runtimeFolderName,
    runtimePath,
    isNew,
  };
}

/**
 * 8. Detectar metadados seguros e objetivos do projeto.
 * NUNCA infere regras de negócio ou objetivos.
 */
export function detectSafeMetadata(projectRoot: string): SafeMetadata {
  let gitBranch = 'none';
  try {
    gitBranch = execSync('git rev-parse --abbrev-ref HEAD', {
      cwd: projectRoot,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim() || 'none';
  } catch {}

  let packageManager = 'none';
  if (fs.existsSync(path.join(projectRoot, 'pnpm-lock.yaml'))) packageManager = 'pnpm';
  else if (fs.existsSync(path.join(projectRoot, 'yarn.lock'))) packageManager = 'yarn';
  else if (fs.existsSync(path.join(projectRoot, 'bun.lockb'))) packageManager = 'bun';
  else if (fs.existsSync(path.join(projectRoot, 'package-lock.json'))) packageManager = 'npm';
  else if (fs.existsSync(path.join(projectRoot, 'package.json'))) packageManager = 'npm (detectado)';

  const stackItems: string[] = [];
  let scriptsList = 'nenhum';

  const pkgJsonPath = path.join(projectRoot, 'package.json');
  if (fs.existsSync(pkgJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
      stackItems.push('Node.js');
      if (pkg.type === 'module') stackItems.push('ESM');

      const allDeps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
      if (allDeps['typescript'] || fs.existsSync(path.join(projectRoot, 'tsconfig.json'))) stackItems.push('TypeScript');
      if (allDeps['react']) stackItems.push('React');
      if (allDeps['vue']) stackItems.push('Vue');
      if (allDeps['next']) stackItems.push('Next.js');
      if (allDeps['express']) stackItems.push('Express');
      if (allDeps['vitest'] || allDeps['jest']) stackItems.push('Testes');

      if (pkg.scripts && typeof pkg.scripts === 'object') {
        scriptsList = Object.keys(pkg.scripts).join(', ');
      }
    } catch {}
  }

  return {
    projectName: getProjectSlug(projectRoot),
    projectPath: projectRoot,
    gitBranch,
    detectedStack: stackItems.length > 0 ? stackItems.join(', ') : 'Desconhecida / Genérica',
    packageManager,
    scripts: scriptsList,
    lastRefreshed: new Date().toISOString(),
  };
}

/**
 * 9. Criar os arquivos de runtime a partir dos templates se não existirem.
 */
export function initRuntimeFiles(projectRoot: string, runtimePath: string): void {
  if (!fs.existsSync(runtimePath)) {
    fs.mkdirSync(runtimePath, { recursive: true });
  }

  const templatesDir = path.resolve(__dirname, '..', 'templates');

  const contextTemplatePath = path.join(templatesDir, 'context.template.md');
  const stateTemplatePath = path.join(templatesDir, 'state.template.md');
  const decisionsTemplatePath = path.join(templatesDir, 'decisions.template.md');

  const targetContext = path.join(runtimePath, 'context.md');
  const targetState = path.join(runtimePath, 'state.md');
  const targetDecisions = path.join(runtimePath, 'decisions.md');

  if (!fs.existsSync(targetContext)) {
    let content = fs.existsSync(contextTemplatePath)
      ? fs.readFileSync(contextTemplatePath, 'utf-8')
      : '# PROJECT CONTEXT\n\n<!-- AUTO:START -->\n<!-- AUTO:END -->\n';
    fs.writeFileSync(targetContext, content, 'utf-8');
  }

  if (!fs.existsSync(targetState)) {
    let content = fs.existsSync(stateTemplatePath)
      ? fs.readFileSync(stateTemplatePath, 'utf-8')
      : '# CURRENT STATE\n\n## Status\nidle\n';
    fs.writeFileSync(targetState, content, 'utf-8');
  }

  if (!fs.existsSync(targetDecisions)) {
    let content = fs.existsSync(decisionsTemplatePath)
      ? fs.readFileSync(decisionsTemplatePath, 'utf-8')
      : '# DECISIONS\n';
    fs.writeFileSync(targetDecisions, content, 'utf-8');
  }
}

/**
 * 10. Atualizar estritamente o bloco <!-- AUTO:START --> até <!-- AUTO:END --> em context.md.
 * Preserva 100% das anotações humanas e decisões abaixo do bloco.
 */
export function refreshContextAutoBlock(projectRoot: string, runtimePath: string): void {
  const contextPath = path.join(runtimePath, 'context.md');
  if (!fs.existsSync(contextPath)) {
    initRuntimeFiles(projectRoot, runtimePath);
  }

  const meta = detectSafeMetadata(projectRoot);
  const autoContent = `<!-- AUTO:START -->
Project: ${meta.projectName}
Path: ${meta.projectPath}
Git branch: ${meta.gitBranch}
Detected stack: ${meta.detectedStack}
Package manager: ${meta.packageManager}
Scripts: ${meta.scripts}
Last refreshed: ${meta.lastRefreshed}
<!-- AUTO:END -->`;

  let currentContent = fs.readFileSync(contextPath, 'utf-8');
  const autoRegex = /<!-- AUTO:START -->[\s\S]*?<!-- AUTO:END -->/;

  if (autoRegex.test(currentContent)) {
    currentContent = currentContent.replace(autoRegex, autoContent);
  } else {
    currentContent = `${autoContent}\n\n${currentContent}`;
  }

  fs.writeFileSync(contextPath, currentContent, 'utf-8');
}

/**
 * COMANDO: start
 */
export function handleStart(): object {
  const projectRoot = resolveProjectRoot();
  const registration = registerOrUpdateProject(projectRoot);

  initRuntimeFiles(projectRoot, registration.runtimePath);
  refreshContextAutoBlock(projectRoot, registration.runtimePath);

  return {
    command: 'start',
    status: 'ready',
    projectId: registration.projectId,
    projectName: registration.projectName,
    projectRoot: projectRoot,
    runtimeDir: registration.runtimePath,
    isNew: registration.isNew,
  };
}

/**
 * COMANDO: status
 */
export function handleStatus(): object {
  const projectRoot = resolveProjectRoot();
  const slug = getProjectSlug(projectRoot);
  const projectId = generateProjectId(projectRoot);
  const devAgentDir = getDevAgentDir();
  const runtimePath = path.join(devAgentDir, 'projects', `${slug}-${projectId}`);

  const exists = fs.existsSync(runtimePath);
  let currentState = 'Nenhum state.md encontrado';

  if (exists) {
    const stateFile = path.join(runtimePath, 'state.md');
    if (fs.existsSync(stateFile)) {
      currentState = fs.readFileSync(stateFile, 'utf-8');
    }
  }

  const meta = detectSafeMetadata(projectRoot);

  return {
    command: 'status',
    projectId,
    projectName: slug,
    projectRoot,
    runtimePath,
    gitBranch: meta.gitBranch,
    detectedStack: meta.detectedStack,
    isInitialized: exists,
    currentStateSnippet: currentState.slice(0, 300),
  };
}

/**
 * COMANDO: refresh
 */
export function handleRefresh(): object {
  const projectRoot = resolveProjectRoot();
  const slug = getProjectSlug(projectRoot);
  const projectId = generateProjectId(projectRoot);
  const devAgentDir = getDevAgentDir();
  const runtimePath = path.join(devAgentDir, 'projects', `${slug}-${projectId}`);

  refreshContextAutoBlock(projectRoot, runtimePath);

  return {
    command: 'refresh',
    status: 'refreshed',
    projectId,
    runtimePath,
    refreshedAt: new Date().toISOString(),
  };
}

/**
 * COMANDO: close
 */
export function handleClose(): object {
  const projectRoot = resolveProjectRoot();
  const projectId = generateProjectId(projectRoot);
  const registry = loadRegistry();

  if (registry.projects[projectId]) {
    registry.projects[projectId].lastUsedAt = new Date().toISOString();
    saveRegistry(registry);
  }

  return {
    command: 'close',
    status: 'session_closed',
    projectId,
    closedAt: new Date().toISOString(),
  };
}

// Roteador de Comandos CLI
const command = process.argv[2] || 'start';

switch (command) {
  case 'start':
    console.log(JSON.stringify(handleStart(), null, 2));
    break;
  case 'status':
    console.log(JSON.stringify(handleStatus(), null, 2));
    break;
  case 'refresh':
    console.log(JSON.stringify(handleRefresh(), null, 2));
    break;
  case 'close':
    console.log(JSON.stringify(handleClose(), null, 2));
    break;
  default:
    console.log(JSON.stringify({ error: `Comando desconhecido: ${command}`, validCommands: ['start', 'status', 'refresh', 'close'] }, null, 2));
    process.exit(1);
}
