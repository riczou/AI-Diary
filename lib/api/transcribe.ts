export function useTranscriptionApi() {
  const transcribeFile = async (uri: string) => {
    console.log('Transcribing file', uri);
    return { text: 'Voice captured and transcribed into calm notes.' };
  };

  return { transcribeFile };
}
