import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
import avatar from "./assets/avatar.jpeg";
import firebase from './firebaseConfig';  // ตรวจสอบการ import ให้ถูกต้อง

export default function MainScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // หลังจากล็อกอินสำเร็จ นำผู้ใช้ไปยังหน้า 'Home'
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert("Error", "There was an issue signing in.");
      console.error("Error during login: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flex:0.5, justifyContent: 'center', alignItems: 'center',}}>
          <Image style={{width: 100, height: 100}} source={avatar}/>
          <Text> New</Text>
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
          color="pink"
          title="Login"
          onPress={handleLogin}
        />

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello React Native</Text>
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
      },
      Img:{
        height:100,
        width: 100,
      }
});
