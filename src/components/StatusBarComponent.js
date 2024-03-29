import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

const StatusBarComponent = ({backgroundColor, isDark}) => (
  <View
    style={{
      height: StatusBar.currentHeight,
      backgroundColor,
    }}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
    </SafeAreaView>
  </View>
);

export default StatusBarComponent;
