import React from 'react';
import AppStack from './app-stack';
import AuthStack from './auth-stack';

const RootNavigator = ({}) => {
  const isLoggedIn = false;
  return isLoggedIn ? <AppStack /> : <AuthStack />;
};

export default RootNavigator;
