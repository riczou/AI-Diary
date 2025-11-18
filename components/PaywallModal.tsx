import { Modal, View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';
import { theme } from '@/lib/theme';
import { useRevenueCat } from '@/lib/api/revenuecat';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export function PaywallModal({ visible, onClose }: Props) {
  const { purchase } = useRevenueCat();

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Unlock mindful AI support</Text>
          <Text style={styles.copy}>
            Continue your calming streaks with unlimited reflections, dream decoding, and adaptive insights. Cancel any
            time.
          </Text>
          <Button label="Start free trial" onPress={purchase} />
          <Button variant="ghost" label="Maybe later" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  sheet: {
    backgroundColor: theme.colors.surface,
    borderRadius: 18,
    padding: theme.spacing(3),
    gap: theme.spacing(1),
    ...theme.shadow.card,
  },
  title: {
    color: theme.colors.text,
    fontSize: 22,
    fontFamily: theme.fonts.semibold,
  },
  copy: {
    color: theme.colors.muted,
    marginBottom: theme.spacing(1),
  },
});
