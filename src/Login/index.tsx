import React from 'react';
import {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LogingScreen} from '../Assets/Helper';



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
