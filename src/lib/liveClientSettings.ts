/**
 * Live API client settings helpers — sandbox exercise of NS-SKILL-003
 * python-ml secrets/settings hygiene lessons (env-only credentials,
 * credential paths outside the worktree, fail-closed auth).
 *
 * Product context: loganware05/bitcoin-data-collector Kalshi client themes.
 * No secrets are stored or logged here.
 */

export type LiveClientSettings = {
  /** Env var *name* that must hold the API token (never the value). */
  apiTokenEnvVar: string
  /** Absolute path to a private key file; must resolve outside the repo root. */
  privateKeyPath: string
}

export class LiveClientConfigError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'LiveClientConfigError'
  }
}

/** Returns true when `candidate` resolves under `repoRoot`. */
export function pathIsInsideRepo(repoRoot: string, candidate: string): boolean {
  const root = normalizeDir(repoRoot)
  const path = normalizePath(candidate)
  return path === root || path.startsWith(`${root}/`)
}

/**
 * Resolve settings from environment. Fail closed when required env is missing
 * or the private key path is inside the worktree / empty.
 */
export function loadLiveClientSettings(
  env: Record<string, string | undefined>,
  repoRoot: string,
  options?: {
    apiTokenEnvVar?: string
    privateKeyPathEnvVar?: string
  },
): LiveClientSettings {
  const apiTokenEnvVar = options?.apiTokenEnvVar ?? 'LIVE_API_TOKEN'
  const privateKeyPathEnvVar =
    options?.privateKeyPathEnvVar ?? 'LIVE_API_PRIVATE_KEY_PATH'

  const token = env[apiTokenEnvVar]
  if (token === undefined || token.trim() === '') {
    throw new LiveClientConfigError(
      `Missing required credential env var: ${apiTokenEnvVar}`,
    )
  }

  const privateKeyPath = env[privateKeyPathEnvVar]
  if (privateKeyPath === undefined || privateKeyPath.trim() === '') {
    throw new LiveClientConfigError(
      `Missing required key path env var: ${privateKeyPathEnvVar}`,
    )
  }

  if (pathIsInsideRepo(repoRoot, privateKeyPath)) {
    throw new LiveClientConfigError(
      `Private key path must resolve outside the worktree (refused: ${privateKeyPathEnvVar})`,
    )
  }

  return {
    apiTokenEnvVar,
    privateKeyPath: normalizePath(privateKeyPath),
  }
}

/**
 * Fail-closed wrapper: auth/config errors must abort live client startup.
 * Broad Exception swallowing is prohibited by NS-SKILL-003 lesson 11.
 */
export function requireLiveClientSettings(
  env: Record<string, string | undefined>,
  repoRoot: string,
): LiveClientSettings {
  return loadLiveClientSettings(env, repoRoot)
}

/** Evidence helper: record env var *names* only (never values). */
export function expectedCredentialEnvNames(
  settings: LiveClientSettings,
  privateKeyPathEnvVar = 'LIVE_API_PRIVATE_KEY_PATH',
): string[] {
  return [settings.apiTokenEnvVar, privateKeyPathEnvVar]
}

function normalizePath(p: string): string {
  // POSIX-style normalize without touching the filesystem (hermetic tests).
  const parts: string[] = []
  for (const seg of p.replace(/\\/g, '/').split('/')) {
    if (seg === '' || seg === '.') continue
    if (seg === '..') {
      parts.pop()
      continue
    }
    parts.push(seg)
  }
  const joined = parts.join('/')
  return p.startsWith('/') ? `/${joined}` : joined
}

function normalizeDir(p: string): string {
  const n = normalizePath(p)
  return n.endsWith('/') ? n.slice(0, -1) : n
}
