import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { theme } from '@/lib/theme';
import { useAIHelper } from '@/lib/ai/helpers';

export default function JournalScreen() {
  const { summarizeEntry } = useAIHelper();
  const sampleEntry = 'Today I felt calm after journaling with teal candles.';

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>Capture your day</Text>
        <Text style={{ color: theme.colors.muted, marginVertical: theme.spacing(1) }}>
          Drop into a flow state with the voice journal or jot a quick note.
        </Text>
        <Button label="Open voice journal" onPress={() => {}} href="/journal/voice" />
        <Link href="/dreams" style={{ color: theme.colors.accent, marginTop: theme.spacing(1) }}>
          Add a dream entry
        </Link>
      </Card>
      <Card>
        <Text style={{ color: theme.colors.muted }}>AI reflection preview</Text>
        <Text style={{ color: theme.colors.text, marginTop: theme.spacing(1) }}>
          {summarizeEntry(sampleEntry)}
        </Text>
      </Card>
    </View>
  );
}
