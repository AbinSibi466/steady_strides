import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import FilePickerManager from 'react-native-file-picker';
import { Picker } from '@react-native-picker/picker';

const App1 = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const selectFile = () => {
    FilePickerManager.showFilePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      } else {
        setSelectedFile(response);
      }
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Name:', name);
    console.log('Category:', category);
    console.log('Subcategory:', subcategory);
    console.log('Selected File:', selectedFile);
    // You can add your logic to submit the form data to a server or perform other actions
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text>Category:</Text>
      <Picker
        selectedValue={category}
        style={{ height: 50, width: 200, marginBottom: 10 }}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
      >
        <Picker.Item label="Increase Happiness" value="increase_happiness" />
        <Picker.Item label="Reduce Stress" value="reduce_stress" />
        <Picker.Item label="Reduce Anxiety" value="reduce_anxiety" />
        <Picker.Item label="Better Sleep" value="better_sleep" />
      </Picker>
      <Text>Subcategory:</Text>
      <Picker
        selectedValue={subcategory}
        style={{ height: 50, width: 200, marginBottom: 10 }}
        onValueChange={(itemValue, itemIndex) => setSubcategory(itemValue)}
      >
        <Picker.Item label="Music" value="music" />
        <Picker.Item label="Voice" value="voice" />
      </Picker>
      <Button title="Select Audio File" onPress={selectFile} />
      {selectedFile && <Text>Selected File: {selectedFile.path}</Text>}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default App1;
