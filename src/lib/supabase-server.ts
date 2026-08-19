import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client — uses service role key for admin operations
// NEVER expose this client to the browser
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseServerConfigured =
  !!supabaseUrl &&
  !!serviceRoleKey &&
  supabaseUrl !== "" &&
  serviceRoleKey !== "";

export const supabaseServer = isSupabaseServerConfigured
  ? createClient(supabaseUrl!, serviceRoleKey!, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;
