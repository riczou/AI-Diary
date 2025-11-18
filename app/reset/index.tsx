import { View, Text } from 'react-native';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { theme } from '@/lib/theme';
import { queueOfflineItem } from '@/stores/offlineQueue';

export default function ResetDetailScreen() {
  const handleReset = () => {
    queueOfflineItem({ id: Date.now().toString(), type: 'reset', payload: { note: 'Quick reset completed' } });
  };

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>Reset session</Text>
        <Text style={{ color: theme.colors.muted, marginVertical: theme.spacing(1) }}>
          Clear your mind with a guided reset. Offline-friendly and synced later.
        </Text>
        <Button label="Log a reset" onPress={handleReset} />
      </Card>
    </View>
  );
}
