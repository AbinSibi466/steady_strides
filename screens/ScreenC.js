import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontFamily, } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import Wikipedia from "./Wikipedia";
import Conversion from "./Conversion";
import Dictionary from "./Dictionary";
import { LinearGradient } from 'expo-linear-gradient';




const ScreenC = () => {
  const navigation = useNavigation();

  return (
    
    <View style={styles.androidLarge2}>
      <Text style={styles.heading}>Lets Learn Together</Text>
      <LinearGradient
        colors={['#353935', '#000']}
        style={styles.containerTodo1}
      >
      <TouchableOpacity onPress={() => { navigation.navigate('TodoList') }}>
        <View style={styles.containerTodo}>
          <Image
            style={styles.androidLarge2Inner}
            source={require("../assets/ToDo1.png")}
          />
          <Text style={styles.todo}>To-Do List</Text>
          
        </View>

      </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={['#353935', '#000']}
        style={styles.container1}
      ><TouchableOpacity onPress={() => { navigation.navigate(Dictionary) }}>
          <Image
            style={styles.image1}
            contentFit="cover"
            source={require("../assets/dictionary.png")}
          />
        </TouchableOpacity></LinearGradient>

      <LinearGradient
        colors={['#353935', '#000']}
        style={styles.container}
      >
        <TouchableOpacity onPress={() => { navigation.navigate(Wikipedia) }}>
          <Image
            style={[styles.image]}
            contentFit="cover"
            source={require("../assets/wikipedia (1).png")}
          />
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={['#353935', '#000']}
        style={styles.container2}
      ><TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
          <Image
            style={[styles.image2]}
            contentFit="cover"
            source={require("../assets/languages.png")}
          />
        </TouchableOpacity></LinearGradient>


      <LinearGradient
        colors={['#353935', '#000']}
        style={styles.container3}
      ><TouchableOpacity onPress={() => { navigation.navigate(Conversion) }}>
          <Image
            style={[styles.image3]}
            contentFit="cover"
            source={require("../assets/conversion-rate.png")}
          />
        </TouchableOpacity></LinearGradient>

    </View>
  );
};

const styles = StyleSheet.create({
  rectangleImage1Btn: {
    borderRadius: 17,
    height: 109,
    width: 132,
  },
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    top:80,
    left:90
  },
  image: {
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
  containerTodo: {
    padding: 0,
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center',
  },
  containerTodo1: {
    top: 510,
    left: 80,
    width: 250,
    padding: 20,
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Align items vertically in the center
    borderRadius: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: 'red',
  },
  androidLarge2Inner: {
    width: 50, // Adjust width as per your image size
    height: 50, // Adjust height as per your image size
    marginRight: 10, // Add margin for spacing between image and text
  },
  todo: {
    fontSize: 20,
    fontWeight: 'bold',
    color:Color.colorWhite
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
  container: {
    width: 150,
    height: 150,
    top: -100,
    left: 30,
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
  container1: {
    width: 150,
    height: 150,
    top: 50,
    left: 210,
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
  container2: {
    width: 150,
    height: 150,
    top: -70,
    left: 30,
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
  container3: {
    width: 150,
    height: 150,
    left: 210,
    top: -220,
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
  wiki: {
    left: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.colorWhite
  },
  dict: {
    left: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.colorWhite
  },
  translate: {
    left: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.colorWhite
  },
  conversion: {
    left: 7,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.colorWhite
  },
  rectangleIcon: {
    top: 661,
    left: 47,
    borderRadius: 10,
    width: 266,
    height: 65,
    position: "absolute",
  },
  letMeHelp: {
    top: 105,
    left: 100,
    fontSize: 24,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  backArrowIcon: {
    top: 55,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  androidLarge2: {
    backgroundColor: "#111",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ScreenC;
