import SignInScreen from '../../Login/SignInScreen';
import SignUpScreen from '../../Login/SignUpScreen';
import splashScren from '../../Login/splashScren';

const LogingScreen = [
  {name: 'SignIn', icon: 'home-outline', deskription:'SignInScreen', screenNavigation: SignInScreen},
  {name: 'SignUp', icon: 'cube-outline',deskription:'SignUpScreen', screenNavigation: SignUpScreen},
  {name: 'Splash', icon: 'cube-outline',deskription:'splashScren', screenNavigation: splashScren},
];
export default LogingScreen;