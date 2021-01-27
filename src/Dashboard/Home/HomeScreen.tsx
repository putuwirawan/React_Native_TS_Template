import React, {useEffect} from 'react';
import {FC} from 'react';
import {View, Text, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Image} from 'react-native-elements';
import {Avatar, Icon} from 'react-native-elements';
import {Routers} from '../../Assets/Helper';
import {useTheme} from '@react-navigation/native';
import {Buttonx} from '../../Assets/Template/Buttonx';
import Styles from '../../Assets/Template/Style';
import {ListItem} from '../../Assets/Template/ListItem';
type Props = StackScreenProps<Routers, 'HomeScreen'>;

export const HomeScreen: FC<Props> = ({navigation, route}) => {
  const {colors} = useTheme();
  const {width} = Dimensions.get('screen');

  useEffect(() => {}, []);
  return (
    <View style={[Styles.centerLeft]}>
      <Buttonx
        buttonText="Go to KAtul"
        onPress={() => navigation.navigate('KatulScreen')}
      />

      <Buttonx
        buttonText="Go to KAtul"
        onPress={() => navigation.navigate('KatulScreen')}
      />
      <ListItem avatar={<Text>1</Text>} title="kopi" subTitle="rujak katul" onPress={() => {}} style={{width:width}} />
      <ListItem avatar={<Text>100</Text>} title="kopi" subTitle="rujak katul gffgfgfgfgfg kkkjjkjhjhgjhk jkjghkjhjkjk ghghgh hhjhjhjh kjjhjkopi susu" onPress={() => {}} style={{width:width}}/>
      <ListItem avatar={<Text>10</Text>} title="kopi" subTitle="rujak katul kopi susu" onPress={() => {}} />
      <ListItem avatar={ <Avatar
                      size="small"
                      rounded
                      icon={{name: 'home', type: 'ionicon'}}
                      activeOpacity={1}
                      containerStyle={{backgroundColor: '#7BA8AE'}}
                    />} title="kopi" subTitle="rujak katul kopi susu" onPress={() => {}} />
    </View>
  );
};
