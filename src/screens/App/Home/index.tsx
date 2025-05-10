import React from 'react';
import { Text } from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import { AppStackScreen } from '../../../types/navigation.types';

type HomeScreenProps = AppStackScreen<'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { styles, theme } = useStyles();

  return (
    <>
      <StatusBarComponent backgroundColor={theme.colors.BACKGROUND} />
      <Text style={styles.txt1}>Home</Text>
    </>
  );
};

export default HomeScreen;
