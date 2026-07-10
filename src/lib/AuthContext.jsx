import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './supabase'
import { loadProgress, saveProgress } from './auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setProfile(null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (userId) => {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single()
    setProfile(data)
  }

  const syncProgress = async (completed, ioaCompleted, scores) => {
    if (!user) return
    const entries = [
      ...completed.map(id => ({ user_id: user.id, case_id: id, mode: 'medecin', score: scores[id]?.medecin ?? 0 })),
      ...ioaCompleted.map(id => ({ user_id: user.id, case_id: id, mode: 'ioa', score: scores[id]?.ioa ?? 0 })),
    ]
    if (entries.length > 0) {
      await supabase.from('user_progress').upsert(entries, { onConflict: 'user_id,case_id,mode' })
    }
  }

  const fetchRemoteProgress = async () => {
    if (!user) return null
    const { data } = await loadProgress(user.id)
    if (!data) return null
    const completed = data.filter(r => r.mode === 'medecin').map(r => r.case_id)
    const ioaCompleted = data.filter(r => r.mode === 'ioa').map(r => r.case_id)
    const scores = {}
    data.forEach(r => {
      if (!scores[r.case_id]) scores[r.case_id] = {}
      scores[r.case_id][r.mode] = r.score
    })
    return { completed, ioaCompleted, scores }
  }

  const isPremium = profile?.role === 'premium'

  return (
    <AuthContext.Provider value={{ user, profile, loading, isPremium, syncProgress, fetchRemoteProgress, refetchProfile: () => fetchProfile(user?.id) }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
