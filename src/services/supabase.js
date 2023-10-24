import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qbslbqlzsxipybtgxkff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFic2xicWx6c3hpcHlidGd4a2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNDc2MjUsImV4cCI6MjAxMzYyMzYyNX0.DUTNq6o966kKx1JCZ_NK5K8jV_KY4ydMN1fV-NXO5pc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
