import { useColorScheme } from 'react-native';

const defaultColors = {
  PRIMARY: '#fd5701',
  PRIMARY_TEXT: 'white',
  SKY_BLUE: '#3db6fc',
  RED: '#ff1605',
  GREEN: '#18c900',
  LIGHT_GRAY100: '#e6e6e6',
  LIGHT_GRAY200: '#c1c7c2',
  BLACK: 'black',
  WHITE: 'white',
};

const colorsDark = {
  ...defaultColors,
  isDark: true,
  BACKGROUND: 'black',
  TEXT: 'white',
  PRIMARY_BACKGROUND: '#F6F9FE',
  LIGHT_GRAY: '#5c5e5c',
  GRAY: 'grey',
};

const colorsLight = {
  ...defaultColors,
  isDark: false,
  BACKGROUND: 'white',
  PRIMARY_BACKGROUND: '#F6F9FE',
  TEXT: 'black',
  LIGHT_GRAY: '#c1c7c2',
  GRAY: 'grey',
};

export type Colors = typeof colorsDark;

export const useColors = () => {
  const color = useColorScheme();
  return color == 'dark' ? colorsDark : colorsLight;
};
