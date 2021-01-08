import { transform } from '@babel/core';
import React, {useEffect, useRef, useState} from 'react';
import {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Animated, PanResponder} from 'react-native';


const {width} = Dimensions.get('screen');
interface NewPosition {
  x: number;
  y: number;
}

interface AnimateProps {
  color?: string;
  children?: React.ReactNode;
  style?: any;
  startPosition?: NewPosition;
}

export const AnimateObject: FC<AnimateProps> = (props) => {
  const {color, children, style, startPosition} = props;
  const position = useRef(new Animated.ValueXY()).current;
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const [translateY, setTranslateY] = useState(new Animated.Value(0));


  const onGesturedHandle = Animated.event(
    [{nativeEvent: {translateX:translateX}}],
    {useNativeDriver: true},
  );
  React.useEffect(() => {}, []);
  return (
  <View>
    <Text>KOPI</Text>
  </View>
 
  );
};

const styles = StyleSheet.create({
  ball: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
