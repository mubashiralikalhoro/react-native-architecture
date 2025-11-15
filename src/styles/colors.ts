import { useColorScheme } from 'react-native';

const colors = {
  PRIMARY: '#fd5701',
  PRIMARY_TEXT: 'white',
  SKY_BLUE: '#3db6fc',
  RED: '#ff1605',
  GREEN: '#18c900',
  LIGHT_GRAY100: '#e6e6e6',
  LIGHT_GRAY200: '#c1c7c2',
  BLACK: 'black',
  WHITE: 'white',
  // Themed Colors
  BACKGROUND: { dark: '#06090E', light: '#F6F9FE' },
  TEXT: { dark: 'white', light: 'black' },
  BORDER_COLOR: { dark: '#1E232D', light: '#E0E0E0' },
  isDark: { dark: true, light: false },
};

export type Colors = {
  [key in keyof typeof colors]: string;
};

export const useColors = () => {
  const colorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const proxiedColors: any = new Proxy(colors, {
    get: (target: any, prop) => {
      if (!(target as any)[prop]) return undefined;
      const value = (target as any)[prop];
      return typeof value === 'string' ? value : value[colorScheme];
    },
  });

  return proxiedColors as Colors;
};
