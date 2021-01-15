import React, {useContext, useEffect} from 'react';
import {FC} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Icon} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import {AppContext} from '../../Model/context';
import {ListItem} from '../../Assets/Template/ListItem';
import AsyncStorage from '@react-native-community/async-storage';

import {Screens} from '../../Assets/Helper';
interface DrawerContentProps {
  navigation: any;
}

export const DrawerContent: FC<DrawerContentProps> = (props) => {
  const {signOut, toggleTheme} = useContext(AppContext);

  const [userLogin, setUserLogin] = React.useState<string | null>(null);
  const paperTheme = useTheme();
  const {colors} = useTheme();

  const getUserLogin = async () => {
    const user = await AsyncStorage.getItem('userName');
    setUserLogin(user);
  };
  useEffect(() => {
    getUserLogin();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View style={{height: 100, borderColor: '#93C2C9', borderWidth: 1}}>
        <View
          style={{
            margin: 10,
            padding: 10,
            flexDirection: 'row',
            alignContent: 'flex-start',
          }}>
          <Avatar
            rounded
            size="large"
            title="US"
            activeOpacity={0.7}
            source={{
              uri:
                'https://th.bing.com/th/id/OIP.O9QGKTfehvwFJHXkYVE4tQHaEK?w=295&h=180&c=7&o=5&dpr=1.25&pid=1.7',
            }}
          />
          <View
            style={{
              paddingLeft: 20,
              alignContent: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>{userLogin}</Text>
            <Text>@katul.com</Text>
          </View>
        </View>
      </View>
      <View style={{height: 450}}>
        <DrawerContentScrollView {...props}>
          <View>
            {Screens.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  title={item.name}
                  onPress={() => props.navigation.navigate(item.deskription)}
                  avatar={
                    <Avatar
                      size="small"
                      rounded
                      icon={{name: item.icon, type: 'ionicon'}}
                      activeOpacity={1}
                      containerStyle={{backgroundColor: '#7BA8AE'}}
                    />
                  }
                />
              );
            })}
          </View>
        </DrawerContentScrollView>
      </View>
      {/* fotter */}
      <View>
        <View style={{borderTopWidth: 1}}>
          <TouchableOpacity
            onPress={() => {
              toggleTheme();
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}>
              <Text style={{color: colors.text, fontSize: 17}}>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={paperTheme.dark} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomDrawerSection}>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userName');
            signOut();
            // props.navigation.navigate('SplashScreen')
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
            }}>
            <View style={{justifyContent: 'center', marginRight: 10}}>
              <Icon
                name="exit-outline"
                type="ionicon"
                size={25}
                color={colors.text}
              />
            </View>
            <View>
              <Text
                style={{fontSize: 20, fontWeight: '700', color: colors.text}}>
                Log-Out
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContent: {flex: 1},
  bottomDrawerSection: {
    marginBottom: 10,
    borderBottomColor: '#ACE6D8',
    borderTopWidth: 2,
    borderTopColor: '#A2C6BD',
  },
});
