import { View, Text } from 'react-native';
import { Card } from '@/components/Card';
import { Charts } from '@/components/Charts';
import { theme } from '@/lib/theme';
import { useInsightsApi } from '@/lib/api/insights';

export default function InsightsScreen() {
  const { getMoodTrends } = useInsightsApi();
  const data = getMoodTrends();

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>Mood insights</Text>
        <Text style={{ color: theme.colors.muted, marginVertical: theme.spacing(1) }}>
          Spot patterns and celebrate streaks with calming visuals.
        </Text>
        <Charts data={data} />
      </Card>
    </View>
  );
}
