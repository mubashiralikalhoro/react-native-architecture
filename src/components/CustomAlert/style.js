import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  centeredView: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  lModalView: {
    height: height * 0.35,
    width: width * 0.6,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: width * 0.05,
  },
  logoBox: {
    width: width * 0.3,
    height: height * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  msgText: {
    fontSize: width * 0.03,
    color: 'green',
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  okBox: {
    height: height * 0.05,
    width: width * 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.025,
    borderWidth: 1,
    borderColor: 'green',
  },
  okText: {
    fontSize: width * 0.03,
    color: 'green',
  },
  notitext: {
    fontSize: width * 0.04,
    color: 'green',
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
});
