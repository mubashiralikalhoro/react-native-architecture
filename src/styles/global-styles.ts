import { Platform, StyleSheet } from 'react-native';
import { Colors } from './colors';
import { Sizes } from './sizes';
import { useMemo } from 'react';
import fonts from '../assets/fonts';

export const getGlobalStyles = (colors: Colors, sizes: Sizes) => {
  return useMemo(
    () =>
      StyleSheet.create({
        TEXT_STYLE: {
          fontSize: sizes.FONTSIZE,
          color: colors.TEXT,
          fontFamily: fonts.Raleway.REGULAR,
        },
        TEXT_STYLE_BOLD: {
          fontSize: sizes.FONTSIZE,
          color: colors.TEXT,
          fontFamily: fonts.Raleway.BOLD,
        },
        SHADOW_STYLE: {
          shadowColor: colors.TEXT,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          borderColor: colors.BORDER_COLOR,
          borderWidth: Platform.OS == 'android' && colors.isDark ? 0.5 : 0,
        },
      }),
    [colors, sizes],
  );
};
