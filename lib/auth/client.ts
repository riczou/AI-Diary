import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

type SupabaseClient = ReturnType<typeof createClient>;

let client: SupabaseClient | null = null;

export function getSupabaseClient() {
  if (!client) {
    const url = Constants.expoConfig?.extra?.supabaseUrl ?? process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
    const key = Constants.expoConfig?.extra?.supabaseAnonKey ?? process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';
    client = createClient(url, key);
  }
  return client;
}
