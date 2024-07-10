import * as React from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color,Colornew, FontFamily } from "../GlobalStyles";
import Meditation from "./Meditation";
import { useNavigation } from "@react-navigation/native";

const MeditationVoice = () => {
const navigation = useNavigation();

  return (
    <View style={styles.androidLarge12}>
      
      <View style={[styles.androidLarge12Child, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      />
      {/* <Image
        style={styles.accountIcon}
        contentFit="cover"
        source={require("../assets/account.png")}
      /> */}
      <Text style={[styles.meditation, styles.restartTypo]}>Meditation</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate(Meditation)}}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      /></TouchableOpacity>
      <Image
        style={styles.androidLarge12Item}
        contentFit="cover"
        source={require("../assets/Rectangle 27.png")}
      />
      <Image
        style={styles.pauseButtonIcon}
        contentFit="cover"
        source={require("../assets/Pause Button.png")}
      />
      <Image
        style={styles.androidLarge12Inner}
        contentFit="cover"
        source={require("../assets/Ellipse-1.png")}
      />
      <Image
        style={[styles.restartIcon, styles.restartPosition]}
        contentFit="cover"
        source={require("../assets/Restart.png")}
      />
      <Text style={[styles.restart, styles.restartPosition]}>Restart</Text>
      <Text style={[styles.exhaleinhale, styles.restartTypo]}>
        Exhale..Inhale..
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  restartTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  restartPosition: {
    left: 330,
    position: "absolute",
  },
  androidLarge12Child: {
    left: 0,
    backgroundColor: "#403838",
    width: 400,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  
  meditation: {
    top: 68,
    left: 140,
    fontSize: 25,
    fontFamily: FontFamily.interRegular,
    color: Colornew.colorWhite,
    position: "absolute",
  },
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  androidLarge12Item: {
    top: 249,
    left: 46,
    borderRadius: 300,
    width: 300,
    height: 300,
    position: "absolute",
  },
  pauseButtonIcon: {
    top: 315,
    left: 115,
    width: 165,
    height: 173,
    position: "absolute",
  },
  androidLarge12Inner: {
    borderRadius: 500,
    top: 329,
    left: 124,
    width: 146,
    height: 146,
    position: "absolute",
  },
  restartIcon: {
    top: 190,
    width: 47,
    height: 41,
  },
  restart: {
    top: 225,
    fontSize: 15,
    width: 66,
    height: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  
  exhaleinhale: {
    top: 602,
    left: 8,
    fontSize: 32,
    width: 253,
    height: 50,
    position: "absolute",
  },
  androidLarge12: {
    backgroundColor: "#03174c",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MeditationVoice;
