import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vpmgqsyjtqzkpakzvrwk.supabase.co'
const supabaseKey = 'sb_publishable_n2_gKXbZ5g0HXbh47GCeIA_82vMPDIC'
export const supabase = createClient(supabaseUrl, supabaseKey)