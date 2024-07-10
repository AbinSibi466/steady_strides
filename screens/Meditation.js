import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontFamily } from "../GlobalStyles";
import MeditationVoice from "./MeditationVoice";
import { useNavigation, useRoute } from "@react-navigation/native";
import MeditationMusic from "./MeditationMusic";
import EngageMeditation from "./EngageMeditation";
import { Audio } from 'expo-av';

const Meditation = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const {type} = route.params;
    console.log("afdfafd",type)
  return (
    <View style={styles.androidLarge13}>
       <TouchableOpacity onPress={()=>{navigation.navigate('MeditationVoice',{type:type})}}>
       <Image
        style={[styles.image8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image 8.png")}
      />
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>{navigation.navigate('MeditationMusic',{type:type})}}>
       <Image
        style={[styles.image9Icon, styles.iconLayout]}
        contentFit="cover"  
        source={require("../assets/image 9.png")}
      />
       </TouchableOpacity>
      
      <Image
        style={[styles.image10Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image 10.png")}
      />
      <Text style={[styles.goodMorningshawn, styles.wishYouAPosition]}>
        Good Morning,Shawn
      </Text>
      <Text style={[styles.wishYouA, styles.wishYouAPosition]}>
        Wish you a Good day...
      </Text>
      <Image
        style={[styles.image11Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image 11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 138,
    top: 210,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout1: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  wishYouAPosition: {
    textAlign: "left",
    color: Color.colorWhite,
    left: 30,
    position: "absolute",
  },
  androidLarge13Child: {
    top: 148,
    left: -2,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge13Item: {
    left: 0,
    borderRadius: 5,
    backgroundColor: "#403838",
    width: 400,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  accountIcon: {
    top: 7,
    left: 306,
    width: 42,
    height: 38,
    position: "absolute",
  },
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  image8Icon: {
    height: 162,
    left: 50,
  },
  image9Icon: {
    left: 205,
    height: 163,
  },
  image10Icon: {
    top: 400,
    left: 50,
    width: 297,
    height: 74,
  },
  goodMorningshawn: {
    top: 90,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  wishYouA: {
    top: 120,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  image11Icon: {
    top: 490,
    width: 301,
    height: 75,
    left: 50,
  },
  androidLarge13: {
    backgroundColor: "#03174c",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Meditation;
