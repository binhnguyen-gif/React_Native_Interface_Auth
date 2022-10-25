import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  GetStarted  from './src/components/GetStarted';
import Login from './src/components/Login';
import Register from './src/components/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="GetStarted" screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStarted}  options={{ title: 'Trang chủ' }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


