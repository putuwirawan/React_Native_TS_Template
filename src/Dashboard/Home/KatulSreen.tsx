import React, {useEffect} from 'react';
import {FC} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Image} from 'react-native-elements';

import {Routers} from '../../Assets/Helper';
import {useTheme} from '@react-navigation/native';
import {Buttonx} from '../../Assets/Template/Buttonx';
import { stringify } from 'qs';

type Props = StackScreenProps<Routers>;

export const KatulScreen: FC<Props> = ({navigation, route}) => {
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
      <Buttonx
        buttonText="Go To Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Text>KOPI SUSU</Text>
      <Text>{stringify(route) }</Text>
    </View>
  );
};
