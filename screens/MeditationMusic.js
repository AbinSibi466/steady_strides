import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet,Animated, View, Text, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import Meditation from "./Meditation";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Audio } from 'expo-av';
import { fonts } from "@rneui/themed/dist/config";


const MeditationMusic = () => {
  const navigation = useNavigation();
  const [sound, setSound] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const spinValue = React.useRef(new Animated.Value(0)).current;

  const spinAnimation = () => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true
        }
      )
    ).start();
  };

  React.useEffect(() => {
    if (isPlaying) {
      spinAnimation();
    } else {
      spinValue.stopAnimation();
    }
  }, [isPlaying]);

  const rotateInterpolation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const stressMusic = [
    require('../musicFiles/stress/1.mp3'), // Replace with your music file paths
    require('../musicFiles/stress/2.mp3'),
    require('../musicFiles/stress/3.mp3'),
    require('../musicFiles/stress/4.mp3'),
    require('../musicFiles/stress/5.mp3'),
  ];

  const performanceMusic = [
    require('../musicFiles/performance/1.mp3'), // Replace with your music file paths
    require('../musicFiles/performance/2.mp3'),
    require('../musicFiles/performance/3.mp3'),
    require('../musicFiles/performance/4.mp3'),
    require('../musicFiles/performance/5.mp3'),
  ];

  const happyMusic = [
    require('../musicFiles/happy/1.mp3'), // Replace with your music file paths
    require('../musicFiles/happy/2.mp3'),
    require('../musicFiles/happy/3.mp3'),
    require('../musicFiles/happy/4.mp3'),
    require('../musicFiles/happy/5.mp3'),
  ];

  const sleepMusic = [
    require('../musicFiles/sleep/1.mp3'), // Replace with your music file paths
    require('../musicFiles/sleep/2.mp3'),
    require('../musicFiles/sleep/3.mp3'),
    require('../musicFiles/sleep/4.mp3'),
    require('../musicFiles/sleep/5.mp3'),
    // Add more music files as needed
  ];

  const route = useRoute();
  const { type } = route.params;
  console.log("afdfafd", type)

  const play = (mood) => {
    if (!isPlaying) {
      if (mood === 'stress') {
        playRandomMusic(stressMusic);
      } else if (mood === 'performance') {
        playRandomMusic(performanceMusic);
      } else if (mood === 'happiness') {
        playRandomMusic(happyMusic);
      } else if (mood === 'sleep') {
        playRandomMusic(sleepMusic);
      }
      setIsPlaying(true);
    } else {
      stopMusic();
    }
  }

  const playRandomMusic = async (musicFiles) => {
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
      setIsPlaying(false);
    }
  };

  return (
    <View style={styles.androidLarge16}>
      <Text style={styles.heading}>{type}</Text>
    <Image
      style={styles.androidLarge16Item}
      contentFit="cover"
      source={require("../assets/Rectangle 28.png")}
    />
    <TouchableOpacity onPress={() => play(type)}>
      <Animated.Image
        style={[styles.androidLarge16Inner, { transform: [{ rotate: rotateInterpolation }] }]}
        contentFit="cover"
        source={require("../assets/disk.png")}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={isPlaying ? stopMusic : () => play(type)}>
      <Text style={styles.buttonText}>{isPlaying ? 'Stop' : 'Start'}</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
nightIsland: {
  top: 146,
  left: 160,
  color: "#fff",
  textAlign: "left",
  position: "absolute",
},
androidLarge16Item: {
  top: 249,
  left: 46,
  borderRadius: 300,
  width: 300,
  height: 300,
  position: "absolute",
  borderWidth:1,
  borderColor:'white'
},
androidLarge16Inner: {
  borderRadius: 500,
  top: 270,
  left: 124,
  width: 146,
  height: 146,
  position: "absolute",
  borderWidth:1,
  borderColor:'red'
},
heading:{
top:100,
fontSize:40,
textAlign:"center",
color:'white'
},
androidLarge16: {
  backgroundColor: "black",
  flex: 1,
  width: "100%",
  height: 800,
  overflow: "hidden",
},
buttonText: {
  color: "#fff",
  textAlign: "center",
  fontSize: 20,
  marginTop: 20,
  top:310
},

button: {
  backgroundColor: "#1e88e5",
  borderRadius: 20,
  marginTop: 20,
  top:0
},
});

export default MeditationMusic;
