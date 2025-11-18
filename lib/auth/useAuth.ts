import { useState } from 'react';
import { getSupabaseClient } from './client';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithMagicLink = async (email: string) => {
    setIsLoading(true);
    try {
      const supabase = getSupabaseClient();
      await supabase.auth.signInWithOtp({ email });
    } finally {
      setIsLoading(false);
    }
  };

  return { signInWithMagicLink, isLoading };
}
