import React from 'react'
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} 
        options={{ 
          headerShown: false, 
        }}
        // onPress={ ({ navigation: { navigate } }) => {
        //   navigate('Details')
        // }}
      />
      <Stack.Screen name="Details" component={MovieDetailsScreen} 
        options={{ 
          headerTransparent: true,
          title: null
        }} 
      />
    </Stack.Navigator>
  )
}
