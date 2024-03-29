import React from 'react';
import {View, TextInput, Dimensions, Text, Image} from 'react-native';

//local import
import styles from './styles';

// dimenstion
const {width, height} = Dimensions.get('window');

//third party library

const Index = ({
  value,
  errorMessage,
  isTouch,
  isError,
  placeholderText,
  isPassword,
  handleOnChangeTxt,
  textIcon,
  verified,
  right,
  keyboardType,
  alignment,
  countryFlag,
  countryFlagCode,
  ...props
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.imgStyleCont}>
            <Image source={textIcon} style={styles.img} />
          </View>
          <TextInput
            value={value}
            placeholder={placeholderText}
            placeholderTextColor="grey"
            style={[styles.textInput]}
            onChangeText={handleOnChangeTxt}
            secureTextEntry={isPassword}
            keyboardType={keyboardType}
          />
        </View>
        {right}
      </View>
    </>
  );
};

export default Index;
