import { Alert } from 'react-native';

export function useRevenueCat() {
  const purchase = async () => {
    Alert.alert('Purchase simulated', 'RevenueCat SDK would handle purchase flow here.');
  };

  const restorePurchases = async () => {
    Alert.alert('Restore simulated', 'Purchases restored for this account.');
  };

  return { purchase, restorePurchases };
}
