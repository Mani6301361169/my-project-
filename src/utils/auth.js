const storage = typeof window !== 'undefined' && window.localStorage
  ? window.localStorage
  : {
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

export function setAuth(role) {
  storage.setItem('collegeFeesAuth', 'true')
  storage.setItem('collegeFeesRole', role)
}

export function clearAuth() {
  storage.removeItem('collegeFeesAuth')
  storage.removeItem('collegeFeesRole')
}

export function isAuthenticated() {
  return storage.getItem('collegeFeesAuth') === 'true'
}

export function getRole() {
  return storage.getItem('collegeFeesRole') || 'student'
}
