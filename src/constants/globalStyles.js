import {Platform, StyleSheet} from 'react-native';

export const getGlobalStyles = (colors, sizes) => {
  return StyleSheet.create({
    TEXT_STYLE: {
      fontSize: sizes.FONTSIZE,
      color: colors.TEXT,
      fontFamily: 'DMSans-Regular',
    },
    TEXT_STYLE_BOLD: {
      fontSize: sizes.FONTSIZE,
      color: colors.TEXT,
      fontFamily: 'DMSans-Bold',
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
      borderColor: colors.GRAY,
      borderWidth: Platform.OS == 'android' && colors.isDark ? 0.5 : 0,
    },
  });
};
