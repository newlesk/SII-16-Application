import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,SafeAreaView,ScrollView } from 'react-native';
import React, {useState} from 'react';
import Lenny from "./assets/Lenny.png"

export default function App() {

  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };
  
  return (
    <View style={styles.container}> 
    
    <ScrollView>

    <View style={{backgroundColor:"blue",flex:0.5}}> 
    <Image style={styles.Img} source={Lenny}/>
    <Image style={{width: 100,height:100}} source={Lenny}/>
 

    <Text onPress={onPressTitle}> New</Text>
    <Text>{titleText}</Text>

    </View>
    
    
    <SafeAreaView>
    
    <TextInput style={styles.input}  placeholder="Email"></TextInput>
    <TextInput style={styles.input}  placeholder="Password"></TextInput>
    
    </SafeAreaView>
    
    

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
