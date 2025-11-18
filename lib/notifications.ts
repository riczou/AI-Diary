import * as Notifications from 'expo-notifications';

export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    console.warn('Push notifications not granted');
    return null;
  }
  const token = await Notifications.getExpoPushTokenAsync();
  return token.data;
}

export async function scheduleResetNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Time to reset',
      body: 'Take a 5-minute pause to breathe and reflect.',
    },
    trigger: { hour: 21, minute: 0, repeats: true },
  });
}
