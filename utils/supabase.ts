import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://rexivuplkwdnoshfwcxd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJleGl2dXBsa3dkbm9zaGZ3Y3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0MjE4NDIsImV4cCI6MjA3Mzk5Nzg0Mn0.PvRNgtBsVlHu_X2wfZKv77M1IVRXkg-TqSzk4QOW2po";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
