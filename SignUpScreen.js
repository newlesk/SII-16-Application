import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
import firebase from './firebaseConfig'; 

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Text>SignUp</Text>
        </View>
        
        <SafeAreaView>
          <TextInput 
            style={styles.input}  
            placeholder="Email" 
            value={email}
            onChangeText={setEmail}
          />
          <TextInput 
            style={styles.input}  
            placeholder="Password" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
          />
        </SafeAreaView>

        <Button
          color="blue"
          title="Sign Up"
          onPress={handleSignUp} 
        />

        {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}

        <Text>If you already have an account, log in!</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
});
