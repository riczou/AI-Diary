import { View, Text } from 'react-native';
import { PaywallModal } from '@/components/PaywallModal';
import { theme } from '@/lib/theme';

export default function PaywallScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <PaywallModal visible onClose={() => {}} />
      <Text style={{ textAlign: 'center', color: theme.colors.muted, marginTop: theme.spacing(2) }}>
        Paywall showcased inline for deep links.
      </Text>
    </View>
  );
}
