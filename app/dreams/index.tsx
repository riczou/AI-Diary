import { View, Text } from 'react-native';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { theme } from '@/lib/theme';
import { useReflectionApi } from '@/lib/api/reflect';

export default function DreamsScreen() {
  const { reflectOnEntry } = useReflectionApi();
  const dream = 'Walking through a misty forest of teal light.';

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>Dream log</Text>
        <Text style={{ color: theme.colors.muted, marginVertical: theme.spacing(1) }}>
          Describe the symbols, themes, and emotions of your dreams.
        </Text>
        <Button label="Get reflection" onPress={() => reflectOnEntry(dream)} />
      </Card>
    </View>
  );
}
