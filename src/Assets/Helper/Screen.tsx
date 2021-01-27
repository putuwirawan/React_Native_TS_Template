import {HomeStackScreen} from '../../Dashboard/Home';
import {Page1StackScreen} from '../../Dashboard/Page1';
import {MoveObjectStackScreen} from '../../Dashboard/MoveObject';

const Screens = [
  {
    name: 'Home',
    icon: 'home-outline',
    deskription: 'HomeScreen',
    screenNavigation: HomeStackScreen,
  },
  {
    name: 'Page1',
    icon: 'cube-outline',
    deskription: 'Page1Screen',
    screenNavigation: Page1StackScreen,
  },
  {
    name: 'Move Object',
    icon: 'cube-outline',
    deskription: 'MoveObjectScreen',
    screenNavigation: MoveObjectStackScreen,
  },
];
export default Screens;
