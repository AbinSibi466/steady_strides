import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../firebaseConfig';
import Toast from 'react-native-toast-message';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Validate form data
    if (!username || !email || !password || !confirmPassword) {
      showToast('All fields are required');
      return;
    }
    if (password.length < 4) {
      showToast('Password must be at least 4 characters long');
      return;
    }
    if (!validateEmail(email)) {
      showToast('Invalid email format');
      return;
    }
    if (password !== confirmPassword) {
      showToast("Passwords don't match");
      return;
    }

    // Firebase registration logic
    const db = firebase.firestore();
    db.collection("users").add({
      username: username,
      email: email,
      password: password
    })
    .then(() => {
      showToast('Registration successful');
      navigation.navigate('LoginScreen')
    })
    .catch((error) => {
      console.error("Error adding user data: ", error);
      showToast('Registration failed. Please try again.');
    });
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const showToast = (message) => {
    Toast.show({
      type: 'error', // 'success' or 'error'
      text1: message,
      position: 'bottom',
      visibilityTime: 3000,
      autoHide: true
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#fff"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ marginTop: 20 }}>
        <Text style={styles.loginText}>If already a user? Login</Text>
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
    backgroundColor: '#111',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#333',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
    color: '#fff',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginText: {
    color: '#fff',
    marginTop: 10,
  },
});

export default Register;
