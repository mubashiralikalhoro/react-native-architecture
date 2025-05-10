import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import { AppStackScreen } from '../../../types/navigation.types';

const HomeScreen: React.FC<AppStackScreen<'Home'>> = ({ navigation }) => {
  const { styles, theme } = useStyles();

  return (
    <>
      <StatusBarComponent backgroundColor={theme.colors.BACKGROUND} />
      <TouchableOpacity style={styles.container}>
        <Text style={styles.txt1}>Home</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
