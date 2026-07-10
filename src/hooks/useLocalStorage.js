import { useState } from 'react'

export function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initial
    } catch {
      return initial
    }
  })

  const set = (updater) => {
    setVal(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      try { localStorage.setItem(key, JSON.stringify(next)) } catch {}
      return next
    })
  }

  return [val, set]
}
