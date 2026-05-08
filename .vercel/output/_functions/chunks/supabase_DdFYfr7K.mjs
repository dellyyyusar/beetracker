import { createClient } from '@supabase/supabase-js';
import { createServerClient, parseCookieHeader } from '@supabase/ssr';

function createSupabaseServerClient(request, cookies) {
  return createServerClient(
    "https://rmlymgadsiakohbrdrif.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbHltZ2Fkc2lha29oYnJkcmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMDIyNDcsImV4cCI6MjA5Mzc3ODI0N30.uXwDvCS7EaI3Po3uwDqh0ADp5Z_ggQ0z2f7b0bucBjE",
    {
      cookies: {
        getAll: () => parseCookieHeader(request.headers.get("Cookie") ?? ""),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(
            ({ name, value, options }) => cookies.set(name, value, options)
          );
        }
      }
    }
  );
}
createClient(
  "https://rmlymgadsiakohbrdrif.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbHltZ2Fkc2lha29oYnJkcmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMDIyNDcsImV4cCI6MjA5Mzc3ODI0N30.uXwDvCS7EaI3Po3uwDqh0ADp5Z_ggQ0z2f7b0bucBjE"
);

export { createSupabaseServerClient as c };
