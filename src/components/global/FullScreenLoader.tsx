import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const FullScreenLoader = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.overlay}>
      <View
        style={[
          styles.lModalView,
          {
            height: height,
            width: width,
          },
        ]}>
        <ActivityIndicator size={'large'} color="#fff" />
      </View>
    </View>
  );
};

export default FullScreenLoader;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lModalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
