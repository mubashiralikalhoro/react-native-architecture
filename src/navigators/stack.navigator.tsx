import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from '../screens/app/home/index.tsx';
import { AppStackParamList } from '../types/navigation.types.ts';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const RootNavigator = ({}) => {
  return <AppStack />;
};

export default RootNavigator;
