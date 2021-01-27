import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Image} from 'react-native-elements';
import {Routers} from '../../Assets/Helper';
import {MoveObject} from '../../Assets/Template/MoveObject';
import Styles from '../../Assets/Template/Style';

type Props = StackScreenProps<Routers>;

export const MoveObjectScreen: FC<Props> = ({navigation, route}) => {
  return (
    <View style={[Styles.container]}>
      <Text>Move Object</Text>
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
     
        <MoveObject
          color="red"
          startPosition={{x: 0, y: 0}}          
          style={{width: 50, height: 50}}
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
    
    </View>
  );
};
