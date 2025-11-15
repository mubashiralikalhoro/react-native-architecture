import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
  Home: undefined;
};

export type AppStackScreen<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export type AuthStackParamList = {
  Login: undefined;
};

export type AuthStackScreen<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
