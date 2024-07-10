import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState(null);

  const musicFiles = [
    require('./Hope.mp3'), // Replace with your music file paths
    require('./Hope.mp3'),
    // Add more music files as needed
  ];

  const playRandomMusic = async () => {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const selectedMusic = musicFiles[randomIndex];
    const { sound } = await Audio.Sound.createAsync(selectedMusic);
    setSound(sound);
    await sound.playAsync();
  }; 

  const stopMusic = async () => {
    if (sound) {
      await sound.stopAsync();
      setSound(null);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Play Random Music" onPress={playRandomMusic} />
      <Button title="Stop Music" onPress={stopMusic} />
    </View>
  );
}
