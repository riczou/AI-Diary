import { ActivityIndicator, Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { Link } from 'expo-router';
import { theme } from '@/lib/theme';

interface Props {
  label: string;
  onPress?: () => void;
  href?: string;
  loading?: boolean;
  variant?: 'primary' | 'ghost';
  style?: ViewStyle;
}

export function Button({ label, onPress, href, loading, variant = 'primary', style }: Props) {
  const content = (
    <Pressable
      disabled={loading}
      onPress={onPress}
      style={[styles.base, variant === 'ghost' ? styles.ghost : styles.primary, style]}
    >
      {loading ? <ActivityIndicator color={theme.colors.text} /> : <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );

  if (href) {
    return (
      <Link href={href} asChild>
        {content}
      </Link>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    paddingVertical: theme.spacing(1.5),
    alignItems: 'center',
  },
  primary: {
    backgroundColor: theme.colors.accent,
  },
  ghost: {
    borderWidth: 1,
    borderColor: theme.colors.accent,
  },
  label: {
    color: theme.colors.text,
    fontFamily: theme.fonts.semibold,
    fontSize: 16,
  },
});
