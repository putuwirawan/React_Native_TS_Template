import React from 'react';
import {FC} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Routers} from '../../Assets/Helper';
import {DrawerBotton} from '../../Assets/Template/DrawerBotton';
import {Page1Screen} from './Page1Screen';

type ScreenRouteProp = RouteProp<Routers, 'HomeScreen'>;
type ScreenNavigationProp = StackNavigationProp<Routers, 'HomeScreen'>;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

export const _StackScreen: FC<Props> = ({navigation, route}) => {
  const Stack = createStackNavigator<Props>();
  const drawerButton = () => (
    <DrawerBotton
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="route"
        component={Page1Screen}
        options={{
          title: 'PAGEkatul',
          headerLeft: drawerButton,
        }}
      />
    </Stack.Navigator>
  );
};
