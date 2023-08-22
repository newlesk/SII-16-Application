// App.js
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from './MainScreen';
import Home from './Home';
import SignUpScreen from './SignUpScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}