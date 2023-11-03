import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://owhczzfipwbzzwlntcqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93aGN6emZpcHdienp3bG50Y3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1ODQxNjUsImV4cCI6MjAxNDE2MDE2NX0.dGMr3CCuM7mUwYMMfFXJ-N9KGfR21DfHX8xxt-GcO-s";

export const supabase = createClient(supabaseUrl, supabaseKey);
