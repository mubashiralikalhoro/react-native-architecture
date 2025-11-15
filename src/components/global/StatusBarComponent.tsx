import React from 'react';
import { StatusBar } from 'react-native';

type Props = {
  backgroundColor: string;
  isDark?: boolean;
};

const StatusBarComponent = ({ backgroundColor, isDark }: Props) => (
  <StatusBar
    translucent
    backgroundColor={backgroundColor}
    barStyle={isDark ? 'light-content' : 'dark-content'}
  />
);

export default StatusBarComponent;
