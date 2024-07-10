import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge from "../screens/AndroidLarge";
import ScreenB from "../screens/Engage";
import ScreenC from "../screens/ScreenC";
import Wikipedia from "../screens/Wikipedia";
import Conversion from "../screens/Conversion";
import Dictionary from "../screens/Dictionary";
import Engage from "../screens/Engage";
import EngageMeditation from "../screens/EngageMeditation";
import Meditation from "../screens/Meditation";
import MeditationVoice from "../screens/MeditationVoice";
import MeditationMusic from "../screens/MeditationMusic";
import Games from "../screens/Games";
import Quiz from "../screens/Quiz";
import StartQuiz from "../screens/StartQuiz";
import Translate from "../screens/Translate";

import Register from "../screens/Register";
import TodoList from "../screens/TodoList";
import CurrencyConvertion from "../screens/CurrencyConversion";
import QuizResult from "../screens/QuizResult";
import QuizHome from "../screens/QuizHome";
import HomeScreen from "../screens/HomeScreen";
import LanguageSelectScreen from "../screens/LanguageSelectScreen";
// import MusicPlayer from "../screens/MeditationMusic";
import MeasurementConverterScreen from "../screens/MeasurementConverterScreen";
import App from "../screens/App";
import LoginScreen from "../screens/Login";
// import App1 from "../screens/App1";
// import App1 from "../screens/App1";


const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="AndroidLarge" component={AndroidLarge} options={{ headerShown: false }} />
            <Stack.Screen name="Engage" component={Engage} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenC" component={ScreenC} options={{ headerShown: false }} />
            <Stack.Screen name="Conversion" component={Conversion} options={{ headerShown: false }} />
            <Stack.Screen name="Wikipedia" component={Wikipedia} options={{ headerShown: false }} />
            <Stack.Screen name="Dictionary" component={Dictionary} options={{ headerShown: false }} />
            <Stack.Screen name="EngageMeditation" component={EngageMeditation} options={{ headerShown: false }} />
            <Stack.Screen name="Meditation" component={Meditation} options={{ headerShown: false }} />
            <Stack.Screen name="MeditationVoice" component={MeditationVoice} options={{ headerShown: false }} />
            <Stack.Screen name="MeditationMusic" component={MeditationMusic} options={{ headerShown: false }} />
            <Stack.Screen name="Games" component={Games} options={{ headerShown: false }} />
            <Stack.Screen name="Translate" component={Translate} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="languageSelect" component={LanguageSelectScreen} options={{ headerShown: false }} />
            <Stack.Screen name="QuizHome" component={QuizHome} options={{ headerShown: false }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            <Stack.Screen name="StartQuiz" component={StartQuiz} options={{ headerShown: false }} />
            <Stack.Screen name="QuizResult" component={QuizResult} options={{ headerShown: false }} />
            <Stack.Screen name="TodoList" component={TodoList} options={{ headerShown: false }} />
            <Stack.Screen name="CurrencyConversion" component={CurrencyConvertion} options={{ headerShown: false }} />
            {/* <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{ headerShown: false }} /> */}
            <Stack.Screen name="MeasurementConverterScreen" component={MeasurementConverterScreen} options={{ headerShown: false }} />
            
            <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
            {/* <Stack.Screen name="App1" component={App1} options={{ headerShown: false }} /> */}
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
