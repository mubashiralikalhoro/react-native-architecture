import {StyleSheet, Dimensions, I18nManager} from 'react-native';

//Color
import color from '../../../constants/color';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
  },

  contStyle: {
    marginTop: height * 0.04,
    paddingBottom: height * 0.04,
  },
  txt1: {
    fontSize: width * 0.033,
    color: 'black',
  },
});
