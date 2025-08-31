import { createClient } from '@supabase/supabase-js';

// These will be set up when you connect to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our RSVP data
export interface RSVPData {
  id?: string;
  name: string;
  email: string;
  experience?: string;
  interests?: string;
  created_at?: string;
}

// Function to submit RSVP
export async function submitRSVP(data: Omit<RSVPData, 'id' | 'created_at'>) {
  const { data: result, error } = await supabase
    .from('rsvps')
    .insert([data])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return result;
}

// Function to get all RSVPs (for admin use)
export async function getRSVPs() {
  const { data, error } = await supabase
    .from('rsvps')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
