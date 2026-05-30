import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://heqmvfzbomyvlvueckah.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlcW12Znpib215dmx2dWVja2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwODMyNDMsImV4cCI6MjA5NTY1OTI0M30.LH2a819RnFhwSPXWlkCU_WNLf6_3Z3wdg98KLQDrEGY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)