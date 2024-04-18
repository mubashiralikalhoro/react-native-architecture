import { StyleSheet } from 'react-native';
import { useColors } from '../../../constants/color';
import { useSizes } from '../../../constants/size';
import { getGlobalStyles } from '../../../constants/globalStyles';

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = StyleSheet.create({
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

  return {
    colors,
    sizes,
    styles,
  };
};

export default useStyles;
