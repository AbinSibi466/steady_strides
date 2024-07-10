import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput,TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Input } from "@rneui/themed";
import { Colornew, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import ScreenC from "./ScreenC";
import { LinearGradient } from "expo-linear-gradient";



const Conversion = () => {
const navigation = useNavigation();

  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState();
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "Currency", label: "Currency" },
    { value: "Measurement", label: "Measurement" },
  ]);
  const [rectangleDropdown1Open, setRectangleDropdown1Open] = useState(false);
  const [rectangleDropdown1Value, setRectangleDropdown1Value] = useState();
  const [rectangleDropdown1Items, setRectangleDropdown1Items] = useState([
    { value: "INR", label: "INR" },
    { value: "USD", label: "USD" },
    { value: "OMR", label: "OMR" },
  ]);
  const [rectangleDropdown2Open, setRectangleDropdown2Open] = useState(false);
  const [rectangleDropdown2Value, setRectangleDropdown2Value] = useState();
  const [rectangleDropdown2Items, setRectangleDropdown2Items] = useState([
    { value: "INR", label: "INR" },
    { value: "USD", label: "USD" },
    { value: "OMR", label: "OMR" },
  ]);
  

  return (
    <View style={styles.androidLarge8}>
      
      <Text style={[styles.conversion, styles.textFlexBox]}>Conversion</Text>
     

      
      <LinearGradient
        colors={['#ffff', '#ffff']}
        style={styles.containerTodo1}
      >
      <TouchableOpacity onPress={() => { navigation.navigate('CurrencyConversion'); }}>
      <View style={styles.containerTodo}>
          <Image
            style={styles.androidLarge2Inner}
            source={require("../assets/currency.png")}
          />
          <Text style={styles.currencybutton1}>Currency</Text>
          
        </View>
      </TouchableOpacity>
      </LinearGradient>
      
      <LinearGradient
        colors={['#ffff', '#ffff']}
        style={styles.containerTodo2}
      >
      <TouchableOpacity onPress={() => { navigation.navigate('MeasurementConverterScreen'); }}>
      <View style={styles.containerTodo}>
          <Image
            style={styles.androidLarge2Inner}
            source={require("../assets/length.png")}
          />
                  <Text style={[styles.currencybutton1]}>Measuements</Text>
          
        </View>
      </TouchableOpacity>
      </LinearGradient>

      
      
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  containerTodo: {
    padding: 0,
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center',
  },
  currencybutton1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerTodo1: {
    top: 410,
    left: 70,
    width: 250,
    padding: 20,
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Align items vertically in the center
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  androidLarge2Inner: {
    width: 50, // Adjust width as per your image size
    height: 50, // Adjust height as per your image size
    marginRight: 10, // Add margin for spacing between image and text
  },
  containerTodo2: {
    top: 180,
    left: 70,
    width: 250,
    padding: 20,
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Align items vertically in the center
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  conversion: {
    top: 68,
    left: 128,
    fontSize: 24,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    position: "absolute",
  },
  backArrowIcon: {
    top: 725,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
  },
  
});

export default Conversion;
