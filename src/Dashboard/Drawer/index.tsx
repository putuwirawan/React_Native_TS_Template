import React from 'react';
import {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Screens} from '../../Assets/Helper';
import {DrawerContent} from './DrawerContent';
import ShowProductView from '../Example/ShowProductView';
import ShowProductDetail from '../Example/ShowProductDetail';
import SnackView from '../Example/SnackView';

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
      <Drawer.Screen name="ShowProductView" component={ShowProductView} />
      <Drawer.Screen name="SnackView" component={SnackView} />
     
      <Drawer.Screen
        name="ShowProductDetail"
        component={ShowProductDetail}
        initialParams={{title: ''}}
      />
    </Drawer.Navigator>
  );
};
