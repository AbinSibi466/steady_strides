import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Color, FontFamily, FontSize, Colornew } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import ScreenC from "./ScreenC";
import { useState } from "react";
import axios from "axios";


const Dictionary = () => {
  const navigation = useNavigation();
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  // "https://api.dictionaryapi.dev/api/v2/entries/en_US/katana"
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      const data = response.data;
      // Assuming the API returns an array of definitions
      if (Array.isArray(data) && data.length > 0) {
        // Access the first definition
        const firstDefinition = data[0];
        if (firstDefinition.meanings && firstDefinition.meanings.length > 0) {
          // Access the first meaning
          const firstMeaning = firstDefinition.meanings[0];
          if (firstMeaning.definitions && firstMeaning.definitions.length > 0) {
            // Access the first definition text
            const firstDefinitionText = firstMeaning.definitions[0].definition;
            setDefinition(firstDefinitionText);
          } else {
            setDefinition('No definition found');
          }
        } else {
          setDefinition('No meaning found');
        }
      } else {
        setDefinition('No data found');
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition('Error fetching definition');
    }
  };
  return (
    <View style={styles.androidLarge5}>


      <Text style={[styles.dictionary]}>Dictionary</Text>
      <View style={styles.androidLarge5Inner} />

      {/* <TextInput
        style={[styles.textinput, styles.textTypo]}
        placeholder="none"
        placeholderTextColor="#fff"
        value={searchTerm}
                onChangeText={setSearchTerm}
                onSubmitEditing={handleSearch}
      /> */}

      <TextInput
        style={[styles.searchWord, styles.dictionaryTypo]}
        placeholder="Search Word"
        placeholderTextColor="#000"
        value={word}
        onChangeText={setWord}
        onSubmitEditing={handleSearch}
      />

      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/Search.png")}
      />


      <View>
        <Text style={[styles.meaningSynonymExample, styles.dictionaryTypo1]}>{definition}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  xboxMenuIconPosition: {
    height: 53,
    top: 0,
    position: "absolute",
  },
  dictionaryTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",

  },
  androidLarge5Child: {
    top: 148,
    left: -2,
    width: 400,
    height: 454,
    position: "absolute",
  },
  androidLarge5Item: {
    left: 0,
    borderRadius: 5,
    backgroundColor: "#403838",
    width: 400,
  },
  dictionaryTypo1: {
    color: Color.colorWhite,

  },
  xboxMenuIcon: {
    left: 5,
    width: 50,
  },
  dictionary: {
    top: 68,
    left: 140,
    fontSize: 25,
    fontFamily: FontFamily.interRegular,
    color: Colornew.colorWhite,
    position: "absolute",
  },
  androidLarge5Inner: {
    top: 183,
    left: 95,
    borderRadius: 6,
    backgroundColor: "#ffff",
    width: 199,
    height: 55,
    position: "absolute",
    borderWidth:1,
        borderColor:'red'
  },
  searchWord: {
    top: 197,
    left: 130,
    width: 150,
    fontSize: 20,

  },
  searchIcon: {
    top: 196,
    left: 310,
    width: 27,
    height: 31,
    position: "absolute",
    
  },
  rectangleIcon: {
    top: 274,
    left: 24,
    borderRadius: 9,
    width: 345,
    height: 270,
    position: "absolute",
  },
  meaningSynonymExample: {
    fontSize: 26,
    top: 323,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 10

  },
  androidLarge5: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Dictionary;
