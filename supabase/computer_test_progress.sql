create table if not exists public.computer_test_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  practice_history jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.computer_test_progress enable row level security;

create policy "Users can view their own computer test progress"
on public.computer_test_progress
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own computer test progress"
on public.computer_test_progress
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own computer test progress"
on public.computer_test_progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
