-- Jalankan di Supabase: SQL Editor > New query
create table attempts (
  id uuid primary key default gen_random_uuid(),
  npm text not null unique,           -- unique = 1 NPM hanya 1 kali mengerjakan
  nama text not null,
  kelas text not null,
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  answers jsonb,
  score int
);
alter table attempts enable row level security; -- tanpa policy: hanya service key (server) yang bisa akses
