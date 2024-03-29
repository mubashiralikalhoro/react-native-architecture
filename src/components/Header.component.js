import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native';
const {width, height} = Dimensions.get('window');

//local
import {Images} from '../assets/images';

//third party library


const Index = ({navigation, ...props}) => {
  return (
    <View style={styles.container}>
      {props.leftIcon == true ? (
        <View style={styles.flexAlin}>
          {props.isMenu == true ? (
            <>
              <TouchableOpacity
                style={styles.imgeStyleCont}
                onPress={props.leftIconOnPressMenu}>
                <Image source={Images.menu} style={styles.img} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imgeStyleCont1}
                onPress={props.leftIconOnPress}>
                <Image source={Images.backBtnBlack} style={styles.img} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.imgeStyleCont1}
              onPress={props.leftIconOnPress}>
              <Image source={Images.backBtnBlack} style={styles.img} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View />
      )}
      <Text style={styles.txt}>{props.HeadTxt}</Text>
      {props.rightIcon == true ? <View /> : <View />}
    </View>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    width: width * 0.93,
    alignSelf: 'center',
    padding: 5,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height * 0.01,
  },
  imgeStyleCont: {
    width: width * 0.05,
    height: width * 0.05,
    // backgroundColor: 'blue',
  },
  imgeStyleCont1: {
    width: width * 0.05,
    height: width * 0.05,
    marginLeft: width * 0.02,
    transform: I18nManager.isRTL ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  txt: {
    fontSize: width * 0.04,
    color: 'black',
    fontFamily: 'Raleway-SemiBold',
  },
  txt1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.024,
  },
  flexAlin: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  circleCont: {
    width: width * 0.033,
    height: width * 0.033,
    borderRadius: width / 2,
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
