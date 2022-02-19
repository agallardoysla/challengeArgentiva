import {RFPercentage} from 'react-native-responsive-fontsize';
import {normalize} from '../hooks/useResponsive';
import {Dimensions} from 'react-native';

export const backgrounds = {
  light: 'white',
  dark: 'black',
};

export const opacities = {
  light05: 'rgba(52, 52, 52, 0.5)',
  light09: 'rgba(52, 52, 52, 0.9)',
};

export const colors = {
  blackText: 'black',
  bluePrimary: '#2e75b6',
  buttonPrimary: '#2e75b6',
  whiteText: 'white',
  purple: 'rgba(125,112,228,255)',
  purpleLight: '#a884c2',
  gray: 'rgba(194,194,194,255)',
  green: '#538b2e',
  darkGreen: '#155E6B',
  grayHard: '#808080',
  orange: '#c55a10',
  yellow: '#ffc001',
  greenLight: '#66d096',
  purpleHard: '#7030a0',
  white: 'white',
  grayTabButtons: '#83848A',
  background: '#D1E6EA',
  grayLight: '#B9C2BE',
  orangeButton: '#EAAB28',
  graySoft: '#828282',
  borderColor: '#CACFD6',
  black: '#000000',
  blue: '#2570F0',
  skyblue: '#D1E6EA',
  grayBackground: '#EAECEB',
};
export const opacity = {
  borderInput: 'rgba(52,52,52,0.6)',
  empty: 'rgba(52,52,52,0.4)',
  emptyGrave: 'rgba(52,52,52,0.9)',
  cart: 'rgba(78,69,142,0.5)',
};

export const fontFamily = {
  Poppins: 'Poppins',
  title: null,
  subtitle: null,
  text: null,
  button: null,
};

export const fontSize = {
  title: RFPercentage(2.5),
  subtitle: RFPercentage(2.3),
  text: RFPercentage(2.1),
  terms: RFPercentage(2.2),
  button: RFPercentage(2.2),
  h1: RFPercentage(3.5),
  tooltip: normalize(12),
  titleLogin: normalize(21),
};
export const screenSize = {
  screenHeight: Math.round(Dimensions.get('window').height),
  screenWidth: Math.round(Dimensions.get('window').width),
};

export const paddingScreen = {
  vertical: '10%',
  horizontal: 40,
};
