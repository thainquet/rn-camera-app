import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/Home';

const Stack = createStackNavigator();

const Route = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default Route;
