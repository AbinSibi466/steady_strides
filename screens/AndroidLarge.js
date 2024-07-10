import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Easing } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ScreenB from "./Engage";
import ScreenC from "./ScreenC";

const AndroidLarge = () => {
  const navigation = useNavigation();
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  // Animation for forward arrow
  const forwardArrowAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  // Animation for backward arrow
  const backwardArrowAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  React.useEffect(() => {
    forwardArrowAnimation();
    backwardArrowAnimation();
  }, []);

  const forwardArrowTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10], // Adjust the value as per your preference for the forward arrow
  });

  const backwardArrowTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10], // Adjust the value as per your preference for the backward arrow
  });

  return (

    
    <View style={styles.androidLarge1}>
      <View style={styles.androidLarge1Child} />
      <Image
        style={[styles.logoIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-no.png")}
      />

      <View style={styles.forwardParent}>
        <Animated.View style={[styles.forwardIcon, styles.iconLayout, { transform: [{ translateX: forwardArrowTranslateX }] }]}>
        <TouchableOpacity onPress={() => { navigation.navigate('Engage') }}>
          <Image
            source={require("../assets/Forward.png")}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
          
        </Animated.View>
        <Text style={[styles.swipe, styles.swipePosition]}>
          <Text style={styles.swipe1}>Swipe</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Animated.View style={[styles.backIcon, styles.iconLayout, { transform: [{ translateX: backwardArrowTranslateX }] }]}>
        <TouchableOpacity onPress={() => { navigation.navigate('ScreenC') }}>
          <Image
            source={require("../assets/Back.png")}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
          
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles

  arrowImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  swipeTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  swipePosition: {
    left: 150,
    position: "absolute",
  },
  iconLayout: {
    width: 90,
    top: 0,
    height: 90,
    position: "absolute",
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },

  logoIcon:{
    width: 200,
    left: 100,
  },

  logoIconPosition: {
    height: 130,
    top: 180,
    position: "absolute",
  },
  steadyStrides: {
    top: 258,
    left: 110,
    fontSize: 24,
    position: "absolute",
  },
  androidLarge1Item: {
    top: 620,
    width: 101,
    height: 93,
  },
  arrowImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 45, // Half of the width/height to make it round
    borderWidth: 2, // Optional: Add border width for visibility
    borderColor: 'red', // Optional: Specify border color
  },
  forwardIcon: {
    left: 290,
  },
  swipe1: {
    
    fontSize: 30,
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  swipe: {
    top: 25,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  backIcon: {
    left: 0,
  },
  forwardParent: {
    top: 425,
    width: 344,
    height: 90,
    left: 5,
    position: "absolute",
  },
  androidLarge1Inner: {
    borderRadius: 0,
    backgroundColor: "#403838",
    width: 4000,
    left: 0,
  },
  xboxMenuIcon: {
    width: 50,
    left: 5,
    height: 53,
  },
  androidLarge1: {
    backgroundColor: "#111",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge;
  