export function useReflectionApi() {
  const reflectOnEntry = async (text: string) => {
    console.log('Reflecting on', text);
    return {
      summary: 'Themes of renewal and clarity emerge.',
      action: 'Consider a gentle breath session before bed.',
    };
  };

  return { reflectOnEntry };
}
