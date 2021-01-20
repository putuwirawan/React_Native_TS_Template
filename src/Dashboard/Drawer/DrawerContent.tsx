import React, {useContext, useEffect} from 'react';
import {FC} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Icon} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';

import {AppContext} from '../../Model/context';
import {ListItem} from '../../Assets/Template/ListItem';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../../Assets/Helper/Styles';
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
    <View style={[Styles.container, {backgroundColor: colors.background}]}>
      {/* Top Header */}
      <View style={[Styles.topSection, {borderColor: '#93C2C9'}]}>
        <View style={[Styles.styleRow, {justifyContent: 'flex-start'}]}>
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
          <View style={[Styles.centerLeft, {height: 70, paddingLeft: 20}]}>
            <Text style={[Styles.mainTitle, {color: colors.text}]}>
              {userLogin}
            </Text>
            <Text style={[Styles.childTitleBold, {color: colors.text}]}>
              @katul.com
            </Text>
          </View>
        </View>
      </View>
      {/* List Menu============================================================================= */}
      <View style={Styles.container}>
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
      {/* Fotter ===========================================================================================*/}
      <View style={[Styles.bottomSection, {borderColor: '#93C2C9'}]}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#93C2C9',
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              toggleTheme();
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 20,
              }}>
              <Text style={[Styles.childTitleBold, {color: colors.text}]}>
                Dark Theme
              </Text>
              <View pointerEvents="none">
                <Switch value={paperTheme.dark} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[Styles.centerLeft, {paddingLeft: 10}]}>
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.removeItem('userToken');
              await AsyncStorage.removeItem('userName');
              signOut();
              // props.navigation.navigate('SplashScreen')
            }}>
            <View style={[Styles.styleRow]}>
              <View style={[Styles.icon, {marginRight: 10}]}>
                <Icon
                  name="exit-outline"
                  type="ionicon"
                  size={25}
                  color={colors.text}
                />
              </View>
              <View style={[Styles.centerLeft]}>
                <Text style={[Styles.subTitleBold, {color: colors.text}]}>
                  Log-Out
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
