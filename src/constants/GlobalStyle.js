import {Platform, StyleSheet} from 'react-native';
import color from './color';
import Size from './Size';

export default StyleSheet.create({
  TEXT_STYLE: {
    fontSize: Size.FONTSIZE,
    color: color.TEXT,
    fontFamily: 'DMSans-Regular',
  },
  TEXT_STYLE_BOLD: {
    fontSize: Size.FONTSIZE,
    color: color.TEXT,
    fontFamily: 'DMSans-Bold',
  },
  SHADOW_STYLE: {
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderColor: color.GRAY,
    borderWidth: Platform.OS == 'android' && color.isDark ? 0.5 : 0,
  },
});
