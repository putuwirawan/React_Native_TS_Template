import React from 'react';
import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Routers} from '../../Assets/Helper';
import {DrawerBotton} from '../../Assets/Template/DrawerBotton';
import {Page1Screen} from './Page1Screen';

type Props = StackScreenProps<Routers, 'Page1Screen'>;

export const Page1StackScreen: FC<Props> = ({navigation, route}) => {
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
          title: 'PAGE !',
          headerLeft: drawerButton,
        }}
      />
    </Stack.Navigator>
  );
};
