import { SUPABASE } from "$lib/constants";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(SUPABASE.Url, SUPABASE.AnonKey);
