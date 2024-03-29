import {StyleSheet, Dimensions, I18nManager} from 'react-native';

// local
import Colors from '../../constants/color';

// dimenstion
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.06,
    alignItems: 'center',
    marginVertical: height * 0.007,
    borderRadius: 15,
    paddingHorizontal: width * 0.02,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    fontSize: width * 0.032,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    // backgroundColor: 'red',
    width: '85%',
    color:'black'
  },
  errorMessage: {
    fontSize: width * 0.032,
    color: 'red',
    alignSelf: 'flex-start',
    marginTop: height * 0.005,
    marginBottom: height * 0.01,
  },
  imgStyleCont: {
    width: width * 0.06,
    height: width * 0.06,
    // backgroundColor: 'red',
    marginRight: width * 0.01,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
