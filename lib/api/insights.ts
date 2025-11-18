export function useInsightsApi() {
  const getMoodTrends = () => {
    return [
      { label: 'Calm', value: 72 },
      { label: 'Energy', value: 48 },
      { label: 'Rest', value: 60 },
    ];
  };

  return { getMoodTrends };
}
