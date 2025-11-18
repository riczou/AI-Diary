import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/lib/theme';

interface Props {
  streak: number;
  label: string;
}

export function StreakBadge({ streak, label }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="flame" size={18} color={theme.colors.accent} />
      <Text style={styles.text}>{streak}-day streak · {label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
    backgroundColor: 'rgba(79, 179, 191, 0.12)',
    borderRadius: 12,
    paddingVertical: theme.spacing(0.5),
    paddingHorizontal: theme.spacing(1.5),
  },
  text: {
    color: theme.colors.accent,
    fontFamily: theme.fonts.semibold,
  },
});
