import { describe, expect, it } from 'vitest'
import {
  LiveClientConfigError,
  expectedCredentialEnvNames,
  loadLiveClientSettings,
  pathIsInsideRepo,
  requireLiveClientSettings,
} from './liveClientSettings'

const REPO = '/workspace/captain-compass-sandbox'

describe('pathIsInsideRepo', () => {
  it('detects paths under the worktree', () => {
    expect(pathIsInsideRepo(REPO, `${REPO}/secrets/key.pem`)).toBe(true)
    expect(pathIsInsideRepo(REPO, `${REPO}/../outside/key.pem`)).toBe(false)
    expect(pathIsInsideRepo(REPO, '/var/secrets/live.pem')).toBe(false)
  })
})

describe('loadLiveClientSettings', () => {
  it('loads env-only credentials with an outside-worktree key path', () => {
    const settings = loadLiveClientSettings(
      {
        LIVE_API_TOKEN: 'not-a-real-secret',
        LIVE_API_PRIVATE_KEY_PATH: '/var/secrets/live.pem',
      },
      REPO,
    )
    expect(settings.apiTokenEnvVar).toBe('LIVE_API_TOKEN')
    expect(settings.privateKeyPath).toBe('/var/secrets/live.pem')
    expect(expectedCredentialEnvNames(settings)).toEqual([
      'LIVE_API_TOKEN',
      'LIVE_API_PRIVATE_KEY_PATH',
    ])
  })

  it('fails closed when the API token env var is missing', () => {
    expect(() =>
      loadLiveClientSettings(
        { LIVE_API_PRIVATE_KEY_PATH: '/var/secrets/live.pem' },
        REPO,
      ),
    ).toThrow(LiveClientConfigError)
  })

  it('fails closed when the private key path is inside the worktree', () => {
    expect(() =>
      loadLiveClientSettings(
        {
          LIVE_API_TOKEN: 'tok',
          LIVE_API_PRIVATE_KEY_PATH: `${REPO}/.keys/live.pem`,
        },
        REPO,
      ),
    ).toThrow(/outside the worktree/)
  })
})

describe('requireLiveClientSettings', () => {
  it('does not swallow config failures', () => {
    expect(() => requireLiveClientSettings({}, REPO)).toThrow(
      LiveClientConfigError,
    )
  })
})
