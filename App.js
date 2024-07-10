import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "./screens/AndroidLarge";
import Navigation from "./router/Navigation";
import { AppRegistry } from "react-native";

const Stack = createStackNavigator();

const App = () => {

   const [fontsLoaded, error] = useFonts({
     "Inter-Regular": require("./assets/fonts/InterVariable.ttf"),
   });

  return (
    <>
    <Navigation/>
    </>
  );
};
// import TrackPlayer from 'react-native-track-player';
AppRegistry.registerComponent('newapp2', () => App);
// TrackPlayer.registerPlaybackService(() => require('./service'));

export default App;
