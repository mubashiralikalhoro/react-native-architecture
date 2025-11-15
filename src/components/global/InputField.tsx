import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useMemo, useRef } from 'react';
import useTheme from '../../styles/theme';

type Props = {
  error?: boolean;
  icon?: any;
  style?: any;
  iconColor?: string;
  fieldProps: TextInputProps;
};

const InputField = ({ icon, error, iconColor, style, fieldProps }: Props) => {
  const { theme, styles } = useStyles();
  const ref = useRef<TextInput>(null);

  return (
    <Pressable
      onPress={() => ref?.current?.focus()}
      style={[
        styles.container,
        {
          borderWidth: error ? 1 : 0.5,
          borderColor: error ? theme.colors.RED : theme.colors.BORDER_COLOR,
        },
        style,
      ]}
    >
      {icon && (
        <Image source={icon} style={[styles.image, { tintColor: iconColor }]} />
      )}
      <TextInput ref={ref} {...fieldProps} />
    </Pressable>
  );
};

export default InputField;

const useStyles = () => {
  const theme = useTheme();

  const styles = useMemo(() => {
    const { colors, sizes, globalStyles } = theme;
    return StyleSheet.create({
      container: {
        width: '100%',
        height: 40,
        borderRadius: sizes.BORDER_RADIUS,
        flexDirection: 'row',
        paddingHorizontal: sizes.PADDING,
        alignItems: 'center',
      },
      input: {
        width: sizes.WIDTH * 0.8,
        ...globalStyles.TEXT_STYLE,
      },
      image: {
        width: sizes.ICON * 0.5,
        height: sizes.ICON * 0.5,
        marginRight: sizes.PADDING,
      },
    });
  }, [theme]);

  return {
    styles,
    theme,
  };
};
