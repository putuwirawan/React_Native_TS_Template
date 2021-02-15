import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {Routers} from '../../Assets/Helper';
import Styles from '../../Assets/Template/Style';
import {ProductFull} from '../../Assets/Template/ProductFull';
import {stringify} from 'qs';

type Props = StackScreenProps<Routers, 'ShowProductDetail'>;

const ShowProductDetail: FC<Props> = ({navigation, route}) => {
  const {title, data} = route.params;

  return (
    <View style={[Styles.container]}>
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    
      <View style={{flexDirection: 'row'}}>
        <ProductFull navigation={navigation} data={data}/>
      </View>
    </View>
  );
};
export default ShowProductDetail;
