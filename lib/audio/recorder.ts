import { useState } from 'react';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

export function useAudioRecorder() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    const permission = await Audio.requestPermissionsAsync();
    if (!permission.granted) return;
    await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
    const { recording: newRecording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
    setRecording(newRecording);
    setIsRecording(true);
  };

  const stopRecording = async () => {
    if (!recording) return null;
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setIsRecording(false);
    setRecording(null);
    const newUri = `${FileSystem.documentDirectory}voice-${Date.now()}.m4a`;
    if (uri) {
      await FileSystem.moveAsync({ from: uri, to: newUri });
    }
    return newUri;
  };

  return { startRecording, stopRecording, isRecording };
}
