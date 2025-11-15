import React from 'react';
import { Text } from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import { AuthStackScreen } from '../../../types/navigation.types';
import InputField from '../../../components/global/InputField';

const LoginScreen: React.FC<AuthStackScreen<'Login'>> = ({ navigation }) => {
  const { styles, theme } = useStyles();

  return (
    <>
      <StatusBarComponent backgroundColor={theme.colors.BACKGROUND} />
      <Text style={styles.txt1}>Login</Text>
      <InputField
        fieldProps={{
          placeholder: 'Email',
        }}
      />
    </>
  );
};

export default LoginScreen;
