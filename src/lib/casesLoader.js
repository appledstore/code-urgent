import { supabase } from './supabase'
import { CASES as LOCAL_CASES } from '../data/cases'

let _cache = null

export async function loadCases() {
  if (_cache) return _cache

  try {
    const { data, error } = await supabase
      .from('cases')
      .select('id, data, is_free')
      .order('id')

    if (error || !data || data.length === 0) {
      // Fallback local si table vide ou erreur
      _cache = LOCAL_CASES
      return _cache
    }

    _cache = data.map(row => ({ ...row.data, id: row.id, _isFree: row.is_free }))
    return _cache
  } catch {
    _cache = LOCAL_CASES
    return _cache
  }
}

export function clearCasesCache() {
  _cache = null
}
