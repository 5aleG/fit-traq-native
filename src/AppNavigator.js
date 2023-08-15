import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen'; 

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login', 
    defaultNavigationOptions: {
      headerShown: false, 
    },
  }
);

export default createAppContainer(AppNavigator);