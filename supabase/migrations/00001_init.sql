-- Migration: Create tables for Baby Tracker
-- Jalankan di Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Tabel babies
create table if not exists babies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  name text not null,
  birth_date date not null,
  gender text check (gender in ('male', 'female')),
  photo_url text,
  created_at timestamptz default now()
);

-- Tabel activities
create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  baby_id uuid references babies(id) on delete cascade,
  user_id uuid references auth.users not null,
  type text not null check (type in ('nursing', 'formula', 'sleep', 'diaper', 'solid', 'growth')),
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  notes text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- Index untuk performa query
create index if not exists idx_activities_user_id on activities(user_id);
create index if not exists idx_activities_baby_id on activities(baby_id);
create index if not exists idx_activities_started_at on activities(started_at desc);
create index if not exists idx_activities_type on activities(type);
create index if not exists idx_babies_user_id on babies(user_id);

-- Row Level Security
alter table babies enable row level security;
alter table activities enable row level security;

-- Policy untuk babies
drop policy if exists "Users see own babies" on babies;
create policy "Users see own babies" on babies
  for all using (auth.uid() = user_id);

-- Policy untuk activities
drop policy if exists "Users see own activities" on activities;
create policy "Users see own activities" on activities
  for all using (auth.uid() = user_id);