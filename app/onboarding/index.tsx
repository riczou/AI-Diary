import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { StreakBadge } from '@/components/StreakBadge';
import { theme } from '@/lib/theme';
import { useUserState } from '@/stores/userStore';

export default function OnboardingScreen() {
  const { completeOnboarding } = useUserState();

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), justifyContent: 'center', gap: theme.spacing(2) }}>
      <Card>
        <StreakBadge streak={7} label="Consistency unlocked" />
        <Text style={{ fontFamily: theme.fonts.semibold, fontSize: 24, color: theme.colors.text, marginTop: theme.spacing(2) }}>
          Build a mindful journaling habit.
        </Text>
        <Text style={{ color: theme.colors.muted, marginTop: theme.spacing(1) }}>
          Capture dreams, reflect on your day, and stay on track with gentle reminders.
        </Text>
        <Button label="Continue" onPress={completeOnboarding} />
        <Link href="/(auth)" style={{ color: theme.colors.accent, marginTop: theme.spacing(1) }}>
          Already have an account?
        </Link>
      </Card>
    </View>
  );
}
