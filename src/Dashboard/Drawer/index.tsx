import React from 'react';
import {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Screens} from '../../Assets/Helper';
import {DrawerContent} from './DrawerContent';
import {KatulScreen} from '../Home/KatulSreen';

export const DrawerScreen: FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'blue',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      {Screens.map((item, index) => {
        return (
          <Drawer.Screen
            key={index}
            name={item.deskription}
            component={item.screenNavigation}
          />
        );
      })}
      {/* List of Screen not list on drawer menu */}
      <Drawer.Screen
        key={Screens.length + 1}
        name="KatulScreen"
        component={KatulScreen}
      />
    </Drawer.Navigator>
  );
};
