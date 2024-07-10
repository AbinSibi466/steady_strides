import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import AndroidLarge from "./AndroidLarge";
import { LinearGradient } from "expo-linear-gradient";


const Engage = () => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.androidLarge3}>
      <Text style={styles.engageWithMe}>Engage with me!</Text>
    <LinearGradient
        colors={['#353935', '#000']}
        style={styles.container1}
      ><TouchableOpacity onPress={()=>{navigation.navigate('EngageMeditation')}}>
          <Image
            style={styles.image1}
            contentFit="cover"
            source={require("../assets/meditation.png")}
          />
        </TouchableOpacity></LinearGradient>

        <LinearGradient
        colors={['#353935', '#000']}
        style={styles.container2}
      ><TouchableOpacity onPress={()=>{navigation.navigate('QuizHome')}}>
          <Image
            style={styles.image2}
            contentFit="cover"
            source={require("../assets/quiz (3).png")}
          />
        </TouchableOpacity></LinearGradient>
        <LinearGradient
        colors={['#353935', '#000']}
        style={styles.container3}
      ><TouchableOpacity onPress={()=>{navigation.navigate('Games')}}>
          <Image
            style={styles.image3}
            contentFit="cover"
            source={require("../assets/game.png")}
          />
        </TouchableOpacity></LinearGradient>
    
      
     
      
      <TouchableOpacity onPress={()=>{navigation.navigate(AndroidLarge)}}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      /></TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  image1: {
    width: 100,
    height: 100,
    margin: 25,
    borderRadius: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8, // This is for Android
  },
  container1: {
    width: 150,
    height: 150,
    top: 120,
    left: 120,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'red',
  },
  image2: {
    width: 100,
    height: 100,
    margin: 25,
    borderRadius: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8, // This is for Android
  },
  container2: {
    width: 150,
    height: 150,
    top: 170,
    left: 120,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'red',
  },
  image3: {
    width: 100,
    height: 100,
    margin: 25,
    borderRadius: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8, // This is for Android
    
  },
  container3: {
    width: 150,
    height: 150,
    top: 220,
    left: 120,
    borderRadius: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'red',
  },
  androidLayout: {
    width: 145,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",

  },
  androidLarge3Child: {
    top: 148,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge3Item: {
    top: 300,
    height: 140,
    left: 125
  },
  androidLarge3Inner: {
    top: 430,
    height: 140,
    left:10
  },
  rectangleView: {
    left: 0,
    borderRadius: 5,
    backgroundColor: "#403838",
    width: 400,
  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  androidLarge3Child1: {
    top: 95,
    left: 80,
    backgroundColor: "#5269a5",
    width: 230,
    height: 40,
    borderRadius: Border.br_8xs,
    position: "absolute",
    
  },
  engageWithMe: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    top:80,
    left:100
  },

  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  rectangleIcon: {
    left: 238,
    top: 175,
    height: 140,
  },
  androidLarge3: {
    backgroundColor: "#000",
    flex: 1,
    alignContent:'center',
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Engage;
