import React, {FC} from 'react';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';

import {Routers} from '../../Assets/Helper';
import {MoveObjectScreen} from './MoveObjectScreen';
import {DrawerBotton} from '../../Assets/Template/DrawerBotton';

type Props = StackScreenProps<Routers>;

export const MoveObjectStackScreen: FC<Props> = ({
  navigation,
  route,
}: Props) => {
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
        component={MoveObjectScreen}
        options={{
          title: 'Move Object',
          headerLeft: drawerButton,
        }}
      />
    </Stack.Navigator>
  );
};
