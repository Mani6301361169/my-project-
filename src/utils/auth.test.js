import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { clearAuth, isAuthenticated, setAuth } from './auth'

const storage = {
  store: {},
  getItem(key) {
    return this.store[key] ?? null
  },
  setItem(key, value) {
    this.store[key] = String(value)
  },
  removeItem(key) {
    delete this.store[key]
  },
  clear() {
    this.store = {}
  },
}

Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: storage,
})

describe('auth helpers', () => {
  beforeEach(() => {
    storage.clear()
  })

  afterEach(() => {
    storage.clear()
  })

  it('returns false when no auth token is stored', () => {
    expect(isAuthenticated()).toBe(false)
  })

  it('returns true when auth data is stored', () => {
    setAuth('student')

    expect(isAuthenticated()).toBe(true)
  })

  it('clears the stored auth state', () => {
    setAuth('student')
    clearAuth()

    expect(isAuthenticated()).toBe(false)
  })
})
