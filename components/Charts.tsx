import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/lib/theme';

interface ChartsProps {
  data: { label: string; value: number }[];
}

export function Charts({ data }: ChartsProps) {
  return (
    <View style={styles.container}>
      {data.map((point) => (
        <View key={point.label} style={styles.row}>
          <Text style={styles.label}>{point.label}</Text>
          <View style={[styles.bar, { width: `${point.value}%` }]} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing(1),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  label: {
    color: theme.colors.text,
    width: 80,
  },
  bar: {
    height: 10,
    backgroundColor: theme.colors.accent,
    borderRadius: 8,
    flex: 1,
  },
});
