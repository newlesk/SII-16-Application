// MainScreen.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
import avatar from "./assets/avatar.jpeg";

export default function MainScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flex:0.5,justifyContent: 'center', alignItems: 'center',}}>
          <Image style={{width: 100,height:100}} source={avatar}/>

          <Text > New</Text>


        </View>
        
        <SafeAreaView>
          <TextInput style={styles.input}  placeholder="Email"></TextInput>
          <TextInput style={styles.input}  placeholder="Password"></TextInput>
        </SafeAreaView>

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
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
