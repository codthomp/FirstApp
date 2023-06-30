import React, { useState } from 'react';
import { View, Text, Alert, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useAuth,} from '../components/AuthContext';

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, onRegister} = useAuth();
  // const [dummy, setDummy] = useState('');

  async function loginHandlerGuy() {
    const result = await onLogin(userName, password);
    if (result && result.error) {
      if (result.msg == "Invalid username." || result.msg == "Invalid password.")
      Alert.alert("Invalid username or password");
    }
  }

  async function registerHandlerGuy() {
    const result = await onRegister(userName, password);
    
    if (result && result.error) {
      Alert.alert(result.msg);
    }
  }

   return (
<KeyboardAvoidingView style={styles.container} behavior='padding'>
    <View style={styles.inputContainer}>
    <TextInput
      placeholder="Username"
      value={userName}
      onChangeText={text=> (setUserName(text))}
      style={styles.input}
    ></TextInput>
    <TextInput
      placeholder="Emssword"
      value={password}
      onChangeText={text=> (setPassword(text))}
      style={styles.input}
      secureTextEntry
    ></TextInput>
    </View>
    <View style={styles.buttonContainerL}>
      <TouchableOpacity
        onPress={() => loginHandlerGuy()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainerR}>
      <TouchableOpacity
        onPress={() => registerHandlerGuy()}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Register</Text>
      </TouchableOpacity>
    </View>
</KeyboardAvoidingView>
   );
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonContainerL: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  buttonContainerR: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }

});