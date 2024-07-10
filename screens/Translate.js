import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { Color, FontFamily, FontSize, Colornew } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import ScreenC from "./ScreenC";
import { useState } from "react";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";

function Translate() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState("English"); // default language
  const [tolanguage, setToLanguage] = useState('Hindi'); // default language
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  // const API_KEY = "4b88b187damshc9f4f642b1586dbp1ed8b5jsn9d31be43967a"

  const translateText = async () => {
    console.log("i am here")
    try {
      
      const response = await axios.post(
        'https://gfsfg-fsgsfg.p.fgsfdsfdg.com/v1/translate',
        {
          text: ` ${inputText}`,
          to: `${tolanguage}`, // Change this to the target language code as needed
          from: `${fromLanguage}` // Change this to the source language code as needed
        },
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': "erf88b18rrrterfe43c9f4f6adsfadfadsfafggfsfg8b5ggbgb456tgfbsgtjhhfgh",
            'X-RapidAPI-Host': 'nlp-sdfadfsdf.p.sfgsfgff.com'
          }
        }

      );
      console.log(response, "helloo")
      setTranslatedText(response.data.data.translations[0].translatedText);
      Keyboard.dismiss();
    } catch (error) {
      console.log("Error translating text", error.response.data)
    }
  }



  return (
    <View style={styles.androidLarge5}>
      <Image
        style={styles.androidLarge5Child}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={[styles.androidLarge5Item, styles.xboxMenuIconPosition]} />
      <Image
        style={[styles.xboxMenuIcon, styles.xboxMenuIconPosition]}
        contentFit="cover"
        source={require("../assets/xbox-menu.png")}
      /><Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/Search.png")}
      />
      <Text style={[styles.dictionary, styles.dictionaryTypo]}>Translator</Text>
      <TouchableOpacity onPress={() => { navigation.navigate(ScreenC); }}><Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
      </TouchableOpacity>
      <View style={styles.androidLarge5Inner} ></View>
      <TouchableOpacity onPress={translateText}>
        <Text style={styles.button}>Translate</Text>
      </TouchableOpacity>
      <TextInput
        style={[styles.searchWord, styles.dictionaryTypo]}
        placeholder="Search Word"
        placeholderTextColor="#fff"
        onChangeText={text => setInputText(text)}
        value={inputText}
        multiline
      />
      <View style={[styles.dropdowncontainer]}>
        <DropDownPicker
          // style={styles.dropdownpicker1}
          open={openFrom}
          setOpen={setOpenFrom}
          value={fromLanguage}
          setValue={setFromLanguage}
          placeholder="Enter"
          defaultValue={fromLanguage}
          onChangeItem={(item) => {
            setFromLanguage(item.value)
          }}
        />
        <DropDownPicker
          // style={styles.dropdownpicker1}
          open={openTo}
          setOpen={setOpenTo}
          value={tolanguage}
          setValue={setToLanguage}
          placeholder="Enter"
          defaultValue={tolanguage}
          onChangeItem={(item) => {
            setToLanguage(item.value)
          }}
        />
      </View>


      <View style={styles.meaning}>
        <Text style={[styles.meaningSynonymExample, styles.dictionaryTypo]}>{translatedText}</Text>
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
  dropdowncontainer: {

  },
  dictionaryTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  meaning: {
    height: 200,
    width: 200,
    top: 400,
    left: 95,
    backgroundColor: "rgba(169, 67, 171, 0.8)",
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
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  androidLarge5Inner: {
    top: 183,
    left: 95,
    borderRadius: 6,
    backgroundColor: "rgba(169, 67, 171, 0.8)",
    width: 199,
    height: 155,
    position: "absolute",
  },
  searchWord: {
    top: 197,
    left: 139,
    width: 150,
    fontSize: 20
  },
  searchIcon: {
    top: 196,
    left: 100,
    width: 27,
    height: 31,
    position: "absolute",
  },
  meaningSynonymExample: {
    fontSize: 26,
    marginLeft: -105,
    top: 323,
    left: "50%",
  },
  androidLarge5: {
    backgroundColor: "#6f5773",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  dropdowncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    top: 400,
    left: 150
  },
});


export default Translate





