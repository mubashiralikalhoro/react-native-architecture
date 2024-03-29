import React, {Component} from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import {Images} from '../../assets/images';

const Index = ({navigation, ...props}) => {
  const {isVisible, onPress, message} = props;
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.lModalView}>
          <View style={styles.logoBox}>
            {/* <Image source={Images.logoWithBlackText} style={styles.logoStyle} /> */}
          </View>

          <Text style={styles.msgText}>{message}</Text>
          <TouchableOpacity onPress={onPress} style={styles.okBox}>
            <Text style={styles.okText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Index;
