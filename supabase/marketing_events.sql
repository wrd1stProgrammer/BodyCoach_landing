create table if not exists public.marketing_events (
    id bigint generated always as identity primary key,
    created_at timestamptz not null default now(),
    event_type text not null check (event_type in ('page_view', 'store_click')),
    session_id text not null,
    page_url text not null,
    page_path text,
    locale text,
    referrer text,
    referrer_host text,
    utm_source text,
    utm_medium text,
    utm_campaign text,
    utm_content text,
    utm_term text,
    utm_id text,
    utm_source_platform text,
    store_platform text check (store_platform in ('app_store', 'play_store')),
    store_location text,
    user_agent text
);

create index if not exists marketing_events_created_at_idx on public.marketing_events (created_at desc);
create index if not exists marketing_events_session_id_idx on public.marketing_events (session_id);
create index if not exists marketing_events_event_type_idx on public.marketing_events (event_type);
create index if not exists marketing_events_threads_idx on public.marketing_events (utm_source, utm_content);
create index if not exists marketing_events_referrer_idx on public.marketing_events (referrer_host);

alter table public.marketing_events enable row level security;
