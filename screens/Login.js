import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { firebase } from '../firebaseConfig';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const db = firebase.firestore();
    // Query Firestore to find a user with the entered email
    db.collection("users").where("email", "==", email).get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // User not found
          showToast('Invalid email or password');
        } else {
          // User found, check password
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            if (userData.password === password) {
              // Password matches, navigate to AndroidLarge screen
              navigation.navigate('AndroidLarge');
            } else {
              // Password doesn't match
              showToast('Invalid email or password');
            }
          });
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        showToast('An error occurred. Please try again.');
      });
  };

  const showToast = (message) => {
    Toast.show({
      type: 'error',
      text1: message,
      position: 'bottom',
      visibilityTime: 3000,
      autoHide: true
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
        <Text style={styles.registerText}>If not a user? Register</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111', // Shaded black background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // White text color
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#333', // Dark gray background color
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2, // Border width
    borderColor: 'red', // Red border color
    color: '#fff', // White text color
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'red', // Red button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
  registerText: {
    color: '#fff',
    marginTop: 10,
  },
});

export default LoginScreen;
