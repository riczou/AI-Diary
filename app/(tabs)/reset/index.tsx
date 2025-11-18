import { View, Text } from 'react-native';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { theme } from '@/lib/theme';
import { scheduleResetNotification } from '@/lib/notifications';

export default function ResetScreen() {
  return (
    <View style={{ flex: 1, padding: theme.spacing(2), gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>Reset rituals</Text>
        <Text style={{ color: theme.colors.muted, marginVertical: theme.spacing(1) }}>
          Schedule gentle reminders to breathe, stretch, or jot a thought.
        </Text>
        <Button label="Schedule nightly reset" onPress={() => scheduleResetNotification()} />
      </Card>
    </View>
  );
}
