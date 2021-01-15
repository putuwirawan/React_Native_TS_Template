import React from 'react';
import {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import {Routers, LogingScreen} from '../Assets/Helper';
// screen
import SplashScreen from './splashScren';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

export const LoginStackScreen: FC = (props) => {
  const RootStack = createStackNavigator();
  return (
    // <NavigationContainer {...props}>
    <RootStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      {LogingScreen.map((item, index) => {
        return (
          <RootStack.Screen
            key={index}
            name={item.deskription}
            component={item.screenNavigation}
          />
        );
      })}
    </RootStack.Navigator>
    // </NavigationContainer>
  );
};

// export LoginStackScreen;
