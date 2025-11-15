import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import { AppStackScreen } from '../../../types/navigation.types';
import useScreenLoader from '../../../hooks/useScreenLoader';

const HomeScreen: React.FC<AppStackScreen<'Home'>> = ({ navigation }) => {
  const { styles, theme } = useStyles();

  return (
    <>
      <StatusBarComponent backgroundColor={theme.colors.BACKGROUND} />
      <Text style={styles.txt1}>Home</Text>
    </>
  );
};

export default HomeScreen;
