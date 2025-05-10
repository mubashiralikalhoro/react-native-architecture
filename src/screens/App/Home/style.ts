import { StyleSheet } from 'react-native';
import useTheme from '../../../styles/theme';
import { useMemo } from 'react';

const useStyles = () => {
  const theme = useTheme();

  const styles = useMemo(() => {
    const { colors, globalStyles, sizes } = theme;
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
      },
      contStyle: {
        marginTop: sizes.HEIGHT * 0.04,
        paddingBottom: sizes.WIDTH * 0.04,
      },
      txt1: {
        ...globalStyles.TEXT_STYLE,
        fontSize: sizes.WIDTH * 0.033,
        color: 'black',
      },
    });
  }, [theme]);

  return {
    theme,
    styles,
  };
};

export default useStyles;
