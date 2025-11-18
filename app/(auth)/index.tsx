import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { theme } from '@/lib/theme';
import { useAuth } from '@/lib/auth/useAuth';

export default function AuthScreen() {
  const { signInWithMagicLink, isLoading } = useAuth();

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), justifyContent: 'center', gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ fontFamily: theme.fonts.semibold, fontSize: 24, color: theme.colors.text }}>Welcome back</Text>
        <Text style={{ color: theme.colors.muted, marginTop: theme.spacing(1) }}>
          Securely log in with Supabase auth. No passwords to forget—just magic links.
        </Text>
        <Button label="Send magic link" onPress={() => signInWithMagicLink('demo@example.com')} loading={isLoading} />
        <Link href="/onboarding" style={{ color: theme.colors.accent, marginTop: theme.spacing(1) }}>
          New here? Start a mindful journey.
        </Link>
      </Card>
    </View>
  );
}
