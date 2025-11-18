export const theme = {
  colors: {
    background: '#0B2530',
    surface: '#123944',
    accent: '#4FB3BF',
    text: '#E8F5F6',
    muted: '#9FBCC2',
    danger: '#FF6B6B',
  },
  spacing: (multiplier = 1) => 8 * multiplier,
  shadow: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
    },
  },
  fonts: {
    regular: 'Inter',
    semibold: 'Inter-SemiBold',
  },
};
