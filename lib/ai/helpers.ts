export function useAIHelper() {
  const summarizeEntry = (entry: string) => {
    return `Calm summary: ${entry.slice(0, 60)}...`;
  };

  const generateInsight = (entries: string[]) => {
    return entries.length > 3 ? 'Consistency is building resilience.' : 'Capture a few more days for tailored insights.';
  };

  return { summarizeEntry, generateInsight };
}
