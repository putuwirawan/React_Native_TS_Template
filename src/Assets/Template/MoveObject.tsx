import {transform} from '@babel/core';
import React, {useEffect, useRef, useState} from 'react';
import {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Animated, PanResponder} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

export const MoveObject: FC<AnimateProps> = (props) => {
  const { children, style, startPosition} = props;
  const position = new Animated.ValueXY({
    x: startPosition ? startPosition.x : 0,
    y: startPosition ? startPosition.y : 0,
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, {dx: position.x, dy: position.y}],
      {useNativeDriver: false},
    ),
  });
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.ball,
        {transform: [{translateX: position.x}, {translateY: position.y}]},
        {...style},
      ]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
