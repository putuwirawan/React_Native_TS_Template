import React from 'react';
import {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CurrencyFormat} from '../../Assets/Helper/GlobalFunction';

import Styles from './Style';
import {Dimensions, StyleSheet} from 'react-native';

interface ButtonxProps {
  color?: string[];
  onPress?: () => void;
  image?: string;
  productName?:string
  title?: React.ReactNode;
  price: number;
  pricePromo?: number;
}
const {width} = Dimensions.get('screen');
export const Product: FC<ButtonxProps> = (props) => {
  const {onPress, image,productName, title, price, pricePromo} = props;
  const {colors} = useTheme();

  let _image = 'https://reactnative.dev/img/tiny_logo.png';
  if (image) {
    _image = image;
  }
  return (
    <View style={{flex:1,width:'100%'}}>
      <TouchableOpacity style={[styles.productContainer,{flex:1}]} onPress={onPress}>
        {/* Header */}
        {title ? (
          <View
            style={[{flexDirection: 'row', flex: 1, backgroundColor: 'green'}]}>
            <View style={[Styles.center, {flex: 2, backgroundColor: 'yellow'}]}>
              <Text>KOPI</Text>
            </View>
            <View style={[Styles.center, {flex: 5}]}>
              <Text>KOPI SUSU</Text>
            </View>
          </View>
        ) : null}

        {/* main Pict */}
        <View style={{flex: 5, }}>
          <Image
            style={{flex: 1}}
            source={{uri: _image}}
          />
        </View>
        {/* main Footer */}
        <View style={{flex: 2}}>
          <View
            style={[
              Styles.center,
              Styles.divider,
              {flex: 1, paddingHorizontal: 2},
            ]}>
            <Text style={[Styles.h5, {color: colors.text}]} numberOfLines={2}>
             {productName? productName:''}
            </Text>
          </View>
          <View style={[Styles.styleRow, {flex: 1}]}>
            <View style={[Styles.centerLeft, {flex: 1}]}>
              <Text style={[Styles.h3, {color: colors.text}]}>Dress</Text>
            </View>
            <View style={[Styles.center, {flex: 2}]}>
              {pricePromo ? (
                <Text style={[Styles.h5, Styles.strikeThroughtextStyle]}>
                  {price ? CurrencyFormat(price) : null}
                </Text>
              ) : null}

              <Text style={[Styles.textPrice, {color: colors.text}]}>
                {pricePromo
                  ? CurrencyFormat(pricePromo)
                  : CurrencyFormat(price)}
              </Text>
            </View>
          </View>
        </View>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 2,
    borderRadius: 5,
   
  },
});
