import React from 'react';
import {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CurrencyFormat} from '../../Assets/Helper/GlobalFunction';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Card, ListItem, Button} from 'react-native-elements';

import Styles from './Style';
import {Dimensions, StyleSheet} from 'react-native';

interface ProductFullProps {
  data?: any;
  onPress?: () => void;
  navigation: any;
}
const {width} = Dimensions.get('screen');

export const ProductFull: FC<ProductFullProps> = (props) => {
  const {onPress, data, navigation} = props;

  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.Container}>
          {/* header */}
          <View style={{height: 50, flexDirection: 'row'}}>
            <View style={[Styles.center, {flex: 1, backgroundColor: 'blue'}]}>
              <Text>Logo</Text>
            </View>
            <View style={[Styles.center, {flex: 3, backgroundColor: 'yellow'}]}>
              <Text style={Styles.subHeader}>INSIGHT</Text>
            </View>
          </View>
          {/* image */}
          <View style={{borderWidth: 1, height: 0.8 * width}}>
            <Image style={{flex: 1}} source={{uri: data.url}} />
          </View>
          {/* fotter */}
          <View
            style={{borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>
            <View style={{flex: 1, flexDirection: 'row', height: 50}}>
              <View style={{flex: 3}}>
                <Text style={[Styles.h4, Styles.strikeThroughtextStyle]}>
                  {CurrencyFormat(50000)}
                </Text>
                <Text style={[Styles.textPrice, {fontSize: 18}]}>
                  {' '}
                  {CurrencyFormat(50000)}
                </Text>
              </View>
              <View style={[Styles.centerLeft, {flex: 2}]}>
                <Image
                  source={require('../../Assets/Images/freeOngkir.png')}
                  style={{height: 40, width: 80}}
                  resizeMode="stretch"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Assets/Images/love-outline.png')}
                    style={{height: 30, width: 30}}
                    resizeMode="stretch"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <StarRating
                disabled={false}
                starSize={25}
                fullStar={require('../Images/FullStart1.png')}
                emptyStar={require('../Images/EmptyStar.png')}
                halfStar={require('../Images/HalpStar.png')}
                iconSet={'FontAwesome'}
                maxStars={5}
                rating={3.73}
                halfStarEnabled
              />
            </View>
            <View
              style={[
                {
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text
                style={{fontSize: 16, fontStyle: 'italic'}}
                numberOfLines={2}>
                {data.title}
              </Text>
            </View>
            <View style={[{flexDirection: 'row'}]}>
              <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
            </View>
            <View>
              <Text>Produc Detail :</Text>
              
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 2,
  },
});
