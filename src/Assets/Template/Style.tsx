import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.25;
const width_logo = height * 0.25;
const baseColor = {darkTheme:{bacground:'#000C66'}, lightTheme:{background:'red'}};

const styles = StyleSheet.create({
  container: {flex: 1},

  header: {color: '#05375a', fontSize: 25, fontWeight: 'bold'},
  subHeader: {color: '#05375a', fontSize: 20, fontWeight: 'bold'},
  button: {alignItems: 'flex-end', marginTop: 20,marginHorizontal:5},
  dashboardLogo:{height: height_logo , width:width_logo },
  // kjjkj
  centerLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleRow: {  
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  bottomSection: {
    paddingTop: 5,
    justifyContent: 'flex-end',
    borderTopWidth: 2,
    borderBottomWidth: 1,
  },
  topSection: {
    paddingBottom: 5,
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderBottomWidth: 2,
  },
  mainTitle: {fontSize: 24, fontWeight: 'bold'},
  title: {fontSize: 20, fontWeight: '700'},
  subTitle: {fontSize: 17, fontWeight: '500'},
  subTitleBold: {fontSize: 17, fontWeight: 'bold'},
  childTitle: {fontSize: 15, fontWeight: '500', fontStyle: 'italic'},
  childTitleBold: {fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'},

});
export {baseColor};
export default styles;
