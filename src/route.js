import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import QRCode from './screen/QRCode';
import Test from './screen/Test';
import FirebaseData from './screen/FirebaseData';

const Stack = createStackNavigator();

const Route = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Scan" component={QRCode} />
    <Stack.Screen name="FirebaseData" component={FirebaseData} />
    <Stack.Screen name="Test" component={Test} />
  </Stack.Navigator>
);

export default Route;
