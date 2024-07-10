import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'; // Import Picker from react-native
import { Picker } from "@react-native-picker/picker";
import { color } from '@rneui/themed/dist/config';
const MeasurementConverterScreen = () => {
  const [fromUnit, setFromUnit] = useState(null);
  const [toUnit, setToUnit] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState(null);

  const convertUnits = (value, fromUnit, toUnit) => {
    let result;
  
    // Check if fromUnit and toUnit are the same
    if (fromUnit === toUnit) {
      return "Same unit conversion is not supported";
    }
  
    // Check if mixing weight and length units
    const isWeight = ['pounds', 'kg', 'ounces'].includes(fromUnit) || ['pounds', 'kg', 'ounces'].includes(toUnit);
    const isLength = ['inches', 'feet', 'cm', 'm'].includes(fromUnit) || ['inches', 'feet', 'cm', 'm'].includes(toUnit);
  
    if (isWeight && isLength) {
      return "Invalid conversion: Mixing weight and length units";
    }
  
    // Convert units based on their types
    switch (fromUnit) {
      case 'inches':
        result = value * 2.54; // Convert inches to centimeters
        break;
      case 'feet':
        result = value * 30.48; // Convert feet to centimeters
        break;
      case 'cm':
        result = value; // Centimeters
        break;
      case 'm':
        result = value * 100; // Convert meters to centimeters
        break;
      case 'pounds':
        result = value * 0.453592; // Convert pounds to kilograms
        break;
      case 'kg':
        result = value; // Kilograms
        break;
      case 'ounces':
        result = value * 0.0283495; // Convert ounces to kilograms
        break;
      default:
        return "Invalid conversion: Unsupported fromUnit";
    }
  
    // Convert to toUnit
    switch (toUnit) {
      case 'inches':
        result /= 2.54; // Convert centimeters to inches
        break;
      case 'feet':
        result /= 30.48; // Convert centimeters to feet
        break;
      case 'cm':
        // Already in centimeters
        break;
      case 'm':
        result /= 100; // Convert centimeters to meters
        break;
      case 'pounds':
        result /= 0.453592; // Convert kilograms to pounds
        break;
      case 'kg':
        // Already in kilograms
        break;
      case 'ounces':
        result /= 0.0283495; // Convert kilograms to ounces
        break;
      default:
        return "Invalid conversion: Unsupported toUnit";
    }
  
    return result;
  };
  

  // Function to handle conversion
  const handleConvert = () => {
    if (fromUnit && toUnit && inputValue !== '') {
      const converted = convertUnits(parseFloat(inputValue), fromUnit, toUnit);
      setConvertedValue(`${converted} ${toUnit}`);
    } else {
      setConvertedValue(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter value to convert"
        placeholderTextColor={"#fff"}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={fromUnit}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setFromUnit(itemValue)}
        >
          <Picker.Item label="Select From Unit" value={null} />
          <Picker.Item label="Inches" value="inches" />
          <Picker.Item label="Feet" value="feet" />
          <Picker.Item label="Centimeters" value="cm" />
          <Picker.Item label="Meters" value="m" />
          <Picker.Item label="Pounds" value="pounds" />
          <Picker.Item label="Kilograms" value="kg" />
          <Picker.Item label="Ounces" value="ounces" />
        </Picker>
        <Picker
          selectedValue={toUnit}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setToUnit(itemValue)}
        >
          <Picker.Item label="Select To Unit" value={null} />
          <Picker.Item label="Inches" value="inches" />
          <Picker.Item label="Feet" value="feet" />
          <Picker.Item label="Centimeters" value="cm" />
          <Picker.Item label="Meters" value="m" />
          <Picker.Item label="Pounds" value="pounds" />
          <Picker.Item label="Kilograms" value="kg" />
          <Picker.Item label="Ounces" value="ounces" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.convertButton} onPress={handleConvert}>
        <Text style={styles.convertButtonText}>Convert</Text>
      </TouchableOpacity>
      {convertedValue && (
        <View style={styles.convertedContainer}>
          <Text style={styles.convertedValue}>{convertedValue}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color:'#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    color:"#fff",
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  picker: {
    height: 40,
    width: '50%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,  
    color:'#fff'
  },
  convertButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  convertButtonText: {
    color: 'white',
    fontSize: 16,
  },
  convertedContainer: {
    marginTop: 20,
  },
  convertedValue: {
    fontSize: 18,
    color: 'white',
  },
});

export default MeasurementConverterScreen;
