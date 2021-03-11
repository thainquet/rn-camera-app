import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import QRCode from './screen/QRCode';

const Stack = createStackNavigator();

const Route = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Scan" component={QRCode} />
  </Stack.Navigator>
);

export default Route;
