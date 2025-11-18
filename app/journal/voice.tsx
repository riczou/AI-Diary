import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { theme } from '@/lib/theme';
import { useAudioRecorder } from '@/lib/audio/recorder';
import { useTranscriptionApi } from '@/lib/api/transcribe';
import { useState } from 'react';

export default function VoiceJournalScreen() {
  const { startRecording, stopRecording, isRecording } = useAudioRecorder();
  const { transcribeFile } = useTranscriptionApi();
  const [transcript, setTranscript] = useState('');

  const handleStop = async () => {
    const fileUri = await stopRecording();
    if (fileUri) {
      const result = await transcribeFile(fileUri);
      setTranscript(result.text);
    }
  };

  return (
    <View style={{ flex: 1, padding: theme.spacing(2), gap: theme.spacing(2) }}>
      <Card>
        <Text style={{ color: theme.colors.text, fontFamily: theme.fonts.semibold, fontSize: 18 }}>Voice journal</Text>
        <Text style={{ color: theme.colors.muted, marginVertical: theme.spacing(1) }}>
          Capture your stream of consciousness hands-free.
        </Text>
        <Button label={isRecording ? 'Stop recording' : 'Start recording'} onPress={isRecording ? handleStop : startRecording} />
      </Card>
      {transcript ? (
        <Card>
          <Text style={{ color: theme.colors.muted }}>Transcript</Text>
          <Text style={{ color: theme.colors.text, marginTop: theme.spacing(1) }}>{transcript}</Text>
        </Card>
      ) : null}
    </View>
  );
}
