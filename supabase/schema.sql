-- Nescia: cours (class_sessions) et réservations (bookings)
-- À coller dans Supabase → SQL Editor → Run.

create table if not exists class_sessions (
  id uuid primary key default gen_random_uuid(),
  class_name text not null,
  starts_at timestamptz not null,
  duration_minutes integer not null default 50,
  capacity integer not null default 8,
  created_at timestamptz not null default now()
);

alter table class_sessions enable row level security;

drop policy if exists "Class sessions are viewable by everyone" on class_sessions;
create policy "Class sessions are viewable by everyone"
  on class_sessions for select
  using (true);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references class_sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (session_id, user_id)
);

alter table bookings enable row level security;

drop policy if exists "Users can view their own bookings" on bookings;
create policy "Users can view their own bookings"
  on bookings for select
  using (auth.uid() = user_id);

drop policy if exists "Users can create their own bookings" on bookings;
create policy "Users can create their own bookings"
  on bookings for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can cancel their own bookings" on bookings;
create policy "Users can cancel their own bookings"
  on bookings for delete
  using (auth.uid() = user_id);

-- Planning des 14 prochains jours (exemple à remplacer par le vrai
-- planning Nescia : lundi/mercredi/vendredi/samedi, 3 créneaux).
insert into class_sessions (class_name, starts_at, duration_minutes, capacity)
select
  case
    when extract(dow from d) = 6 then 'Pilates Reformer'
    when t.label = 'matin' then 'Pilates Reformer'
    when t.label = 'midi' then 'Pilates Reformer Cardio'
    else 'Pilates Reformer Strong'
  end as class_name,
  (d::date + t.time_of_day)::timestamptz as starts_at,
  50,
  8
from generate_series(current_date, current_date + interval '13 days', interval '1 day') as d
cross join (
  values ('matin', time '08:00'), ('midi', time '12:30'), ('soir', time '18:30')
) as t(label, time_of_day)
where extract(dow from d) in (1, 3, 5, 6) -- lundi, mercredi, vendredi, samedi
  and not (extract(dow from d) = 6 and t.label <> 'matin'); -- samedi : un seul cours, le matin

-- Demandes d'adhésion (formulaire /adhesion)
create table if not exists membership_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  pack text not null,
  engagement text not null,
  city text,
  goals text,
  created_at timestamptz not null default now()
);

alter table membership_requests enable row level security;

drop policy if exists "Users can view their own membership request" on membership_requests;
create policy "Users can view their own membership request"
  on membership_requests for select
  using (auth.uid() = user_id);

drop policy if exists "Users can create their own membership request" on membership_requests;
create policy "Users can create their own membership request"
  on membership_requests for insert
  with check (auth.uid() = user_id);
