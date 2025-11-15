import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { scaleWithMax } from '../utils';

const getSizes = (width: number, height: number) => ({
  WIDTH: width,
  HEIGHT: height,
  PADDING: width * 0.03,
  PADDED_WIDTH: width - width * 0.06,
  FONTSIZE: scaleWithMax(14, 16),
  FONTSIZE_HIGH: scaleWithMax(18, 20),
  FONTSIZE_SMALL: scaleWithMax(10, 12),
  ICON: width * 0.06,
  HEADER_FOOTER_SIZE: height * 0.1,
  BORDER_RADIUS: scaleWithMax(5, 5),
  BORDER_RADIUS_HIGH: scaleWithMax(15, 15),
});

export type Sizes = ReturnType<typeof getSizes>;

export const useSizes = () => {
  const { width, height } = useWindowDimensions();
  return useMemo(() => getSizes(width, height), [width, height]);
};
