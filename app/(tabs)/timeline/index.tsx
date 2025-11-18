import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Card } from '@/components/Card';
import { theme } from '@/lib/theme';
import { useOfflineQueue } from '@/stores/offlineQueue';

const timelineEntries = [
  { id: '1', title: 'Morning reflection', summary: 'Felt grounded after breathwork.', date: 'Today' },
  { id: '2', title: 'Dream fragment', summary: 'Floating over a muted teal sea.', date: 'Yesterday' },
];

export default function TimelineScreen() {
  const { pendingItems } = useOfflineQueue();

  return (
    <View style={{ flex: 1, padding: theme.spacing(2) }}>
      {pendingItems.length > 0 && (
        <Card style={{ marginBottom: theme.spacing(2) }}>
          <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold }}>
            Offline queue active
          </Text>
          <Text style={{ color: theme.colors.muted }}>
            {pendingItems.length} entries will sync when you are back online.
          </Text>
        </Card>
      )}
      <FlashList
        data={timelineEntries}
        estimatedItemSize={120}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: theme.spacing(2) }}>
            <Text style={{ color: theme.colors.muted, marginBottom: theme.spacing(1) }}>{item.date}</Text>
            <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: theme.colors.muted, marginTop: theme.spacing(1) }}>{item.summary}</Text>
          </Card>
        )}
      />
    </View>
  );
}
