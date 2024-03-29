import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Splash from "../screens/Auth/Splash";
import Home from "../screens/App/Home";

const Stack = createNativeStackNavigator();

export const RootNavigator = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};
