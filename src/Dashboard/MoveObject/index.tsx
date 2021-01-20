import React from 'react';
import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';

import {Routers} from '../../Assets/Helper';
import {MoveObjectScreen} from './MoveObjectScreen';

type Props = StackScreenProps<Routers, 'Page1Screen'>;

export const MoveObjectStackScreen: FC<Props> = ({navigation, route}) => {
  const Stack = createStackNavigator<Props>();
  const drawerButton = () => (
    <Icon
      name="list-outline"
      type="ionicon"
      size={30}
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
        component={MoveObjectScreen}
        options={{
          title: 'PAGE !',
          headerLeft: drawerButton,
        }}
        
      />
    </Stack.Navigator>
  );
};
