-- Table cases (contenu pédagogique protégé côté serveur)
CREATE TABLE IF NOT EXISTS public.cases (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  is_free BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

-- Cas gratuits : accessibles à tous les utilisateurs connectés
CREATE POLICY "Free cases visible to all authenticated users"
  ON public.cases FOR SELECT
  TO authenticated
  USING (is_free = TRUE);

-- Cas premium : accessibles uniquement aux utilisateurs premium
CREATE POLICY "Premium cases visible to premium users"
  ON public.cases FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'premium'
    )
  );

-- Marquer les 3 cas gratuits
-- À exécuter après l'insertion des cas :
-- UPDATE public.cases SET is_free = TRUE WHERE id IN ('vagal', 'stemi', 'meningite');
