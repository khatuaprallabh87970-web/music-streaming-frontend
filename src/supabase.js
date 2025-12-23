import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xxpfdyvkaohmmqkysngd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4cGZkeXZrYW9obW1xa3lzbmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0MDcwNzIsImV4cCI6MjA4MTk4MzA3Mn0.BaHJ-sOisrB-CFkN9jI1IHCTbBUDyztmYX-xeJeQXo8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
