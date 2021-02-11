import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from 'react-native-elements';
import {Routers} from '../../Assets/Helper';
import Styles from '../../Assets/Template/Style';
import {Product} from '../../Assets/Template/Product';

type Props = StackScreenProps<Routers>;

const ShowProductView: FC<Props> = ({navigation, route}) => {
  return (
    <View style={[Styles.container]}>
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <View style={{flexDirection: 'row'}}>
      <Text>KOPI</Text>
      </View>
    </View>
  );
};
export default ShowProductView;
