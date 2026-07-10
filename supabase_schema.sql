-- ============================================
-- CODE URGENT — Schéma Supabase
-- Colle ce SQL dans Supabase > SQL Editor > Run
-- ============================================

-- Table des profils utilisateurs (complète auth.users)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  full_name text,
  role text default 'free' check (role in ('free', 'premium')),
  created_at timestamp with time zone default now()
);

-- Activer Row Level Security
alter table public.profiles enable row level security;

-- Chaque utilisateur ne voit que son profil
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Table progression utilisateur
create table public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  case_id text not null,
  mode text not null check (mode in ('medecin', 'ioa')),
  score integer default 0,
  completed_at timestamp with time zone default now(),
  unique(user_id, case_id, mode)
);

alter table public.user_progress enable row level security;

create policy "Users can manage own progress"
  on public.user_progress for all
  using (auth.uid() = user_id);

-- Créer automatiquement un profil à l'inscription
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
