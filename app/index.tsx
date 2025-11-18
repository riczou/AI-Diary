import { Redirect } from 'expo-router';
import { useUserState } from '@/stores/userStore';

export default function Index() {
  const { hasCompletedOnboarding } = useUserState();
  if (!hasCompletedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  return <Redirect href="/(tabs)/timeline" />;
}
