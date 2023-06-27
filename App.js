import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
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

    <View style={{backgroundColor:"blue",flex:0.5}}> 
    <Image source={Lenny}/>

    <Text onPress={onPressTitle}> New</Text>
    <Text>{titleText}</Text>

    </View>


      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
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
});
