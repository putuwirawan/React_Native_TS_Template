import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
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

export default Styles;
