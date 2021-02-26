import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  )
}
