import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const scaleWithMax = (value: number, max: number) => {
  return Math.min(scale(value), max);
};
