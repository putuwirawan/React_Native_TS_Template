import React from 'react';
import {FC} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import {Routers} from '../../Assets/Helper';
import Styles from '../../Assets/Template/Style';
import Albums from '../../Assets/Example/Albums';
import {Product} from '../../Assets/Template/Product';
import {LimitText} from '../../Assets/Helper/GlobalFunction';

type NavigationProp = StackNavigationProp<Routers>;
type ScreenRouteProp = RouteProp<Routers, 'SnackView'>;
interface Props {
  navigation: NavigationProp;
  route: ScreenRouteProp;
  indext: number;
}
interface ItemRender {
  item: any;
  index: number;
}

const numColumns = 3;
const formatData = (data: any[], numColumns: number) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};
const SnackView: FC<Props> = (props) => {
  const {navigation, route} = props;

  const renderItem = ({item, index}: {item: any; index: number}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={[styles.item]}>
        <Product
          price={50000}
          image={item.url}
          productName={LimitText(item.title, 38)}
          pricePromo={30000}
          onPress={() =>
            navigation.navigate('ShowProductDetail', {title: 'kopi susu', data:item})
          }
        />
      </View>
    );
  };

  return (
    <View style={[Styles.container]}>
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <FlatList
        data={formatData(Albums, numColumns)}
        renderItem={renderItem}
        numColumns={numColumns}
      />

      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};
export default SnackView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 2,
    height: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'#BDC3D2'
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});
