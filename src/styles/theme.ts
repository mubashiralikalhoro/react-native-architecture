import { useColors } from './colors';
import { useSizes } from './sizes';
import { getGlobalStyles } from './global-styles';

const useTheme = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  return { colors, sizes, globalStyles };
};

export default useTheme;
