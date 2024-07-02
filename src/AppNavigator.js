import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../components/Splash';
import SelectModel from '../components/SelectModel';
import {screen} from './../node_modules/three/examples/jsm/nodes/display/BlendModeNode';
import ARView from '../components/ARView';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Select Model" component={SelectModel} />
        <Stack.Screen name="AR View" component={ARView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
