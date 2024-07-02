import React from 'react'
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroAmbientLight,
  ViroText,
} from '@viro-community/react-viro';
import {Viro3DObject} from '@viro-community/react-viro';



const App = () => {
  

 
    return (
    <AppNavigator></AppNavigator>
    );

  
}

export default App