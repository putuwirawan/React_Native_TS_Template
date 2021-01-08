import React, {useRef, useEffect} from 'react';
import {FC} from 'react';
import {
  View,
  Dimensions,
  ViewProps,
  StyleSheet,
  Animated,
  LogBox,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Routers from '../../Routers';
import {useTheme} from '@react-navigation/native';
import {AnimateObject} from '../../Assets/Template/AnimateObject';
import {Center} from '../../Assets/Template/Center';
import Style from '../../Assets/Template/Style';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
// import Animated from 'react-native-reanimated';

type Props = StackScreenProps<Routers, 'HomeScreen'>;

export const HomeScreen: FC<Props> = ({navigation, route}) => {
  const {colors} = useTheme();
  const {width} = Dimensions.get('screen');

  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <AnimateObject
          color="red"
          startPosition={{x:100, y:200}}
          children={
            <Image
              source={require('../../Assets/Images/logo.png')}
              style={{
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="stretch"
            />
          }
        />

        {/* <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStartChange}>
          <Animated.View style={[styles.box, {transform: [{translateX: translationX}]}]}>
            <Image
              source={require('../../Assets/Images/logo.png')}
              style={{
                width: 100,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="stretch"
            />
          </Animated.View>
        </PanGestureHandler> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
