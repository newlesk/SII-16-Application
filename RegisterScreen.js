import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
import firebase from './firebaseConfig';  // ตรวจสอบการ import ให้ถูกต้อง

export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
        if (password.length < 6) {
            Alert.alert("Password should be at least 6 characters.");
            return;
        }
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const uid = response.user.uid;

      const db = firebase.firestore();

      await db.collection('users').doc(uid).set({
        firstName: firstName,
        lastName: lastName,
        studentId: studentId,
        email: email,
      });

      navigation.navigate('Home');
    } catch (error) {
      Alert.alert("Error", "There was an issue with registration.");
      console.error("Error during registration: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <TextInput 
            style={styles.input} 
            placeholder="First Name" 
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Last Name" 
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Student ID" 
            value={studentId}
            onChangeText={setStudentId}
          />
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
          title="Register"
          onPress={handleRegister}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
