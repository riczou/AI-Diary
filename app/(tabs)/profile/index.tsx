import { View, Text } from 'react-native';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { PaywallModal } from '@/components/PaywallModal';
import { theme } from '@/lib/theme';
import { useRevenueCat } from '@/lib/api/revenuecat';
import { useUserState } from '@/stores/userStore';
import { useState } from 'react';

export default function ProfileScreen() {
  const { restorePurchases } = useRevenueCat();
  const { trialEndsAt } = useUserState();
  const [showPaywall, setShowPaywall] = useState(false);

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>Profile</Text>
        <Text style={{ color: theme.colors.muted, marginVertical: theme.spacing(1) }}>
          Trial ends at: {trialEndsAt ? new Date(trialEndsAt).toLocaleDateString() : 'Set during onboarding'}
        </Text>
        <Button label="Upgrade" onPress={() => setShowPaywall(true)} />
        <Button variant="ghost" label="Restore purchases" onPress={restorePurchases} />
      </Card>
      <PaywallModal visible={showPaywall} onClose={() => setShowPaywall(false)} />
    </View>
  );
}
