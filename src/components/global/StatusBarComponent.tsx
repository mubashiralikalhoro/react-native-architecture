import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

type Props = {
  backgroundColor: string;
  isDark?: boolean;
};

const StatusBarComponent = ({backgroundColor, isDark}: Props) => (
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
