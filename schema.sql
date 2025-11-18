-- Supabase schema for AI Diary
create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  email text unique,
  display_name text,
  created_at timestamptz default now()
);

create table if not exists entries (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id),
  type text not null,
  body text,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

create table if not exists insights (
  id uuid primary key default uuid_generate_v4(),
  entry_id uuid references entries(id),
  summary text,
  actions text,
  created_at timestamptz default now()
);
