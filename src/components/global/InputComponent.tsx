import {Image, StyleSheet, TextInput, View} from 'react-native';
import React, {useMemo} from 'react';
import {useSizes} from '../../constants/size';
import {getGlobalStyles} from '../../constants/globalStyles';
import {useColors} from '../../constants/color';

type Props = {
  placeholder: string;
  placeholderTextColor?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
  icon?: any;
  secureTextEntry?: boolean;
  style?: any;
  keyboardType?: any;
  autoFocus?: boolean;
  ref?: any;
  iconColor?: string;
  multiline?: boolean;
  editable?: boolean;
};

const InputComponent = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  error,
  icon,
  secureTextEntry,
  style,
  keyboardType,
  autoFocus,
  ref,
  iconColor,
  multiline,
  editable,
  ...props
}: Props) => {
  const {colors, styles} = useStyles();
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: error ? 1 : 0.5,
          borderColor: error ? colors.RED : colors.GRAY,
        },
        style,
      ]}>
      {icon && (
        <Image source={icon} style={[styles.image, {tintColor: iconColor}]} />
      )}
      <TextInput
        {...props}
        editable={editable}
        multiline={multiline}
        autoFocus={autoFocus}
        ref={ref}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : colors.GRAY
        }
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputComponent;

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);

  const styles = useMemo(
    () =>
      StyleSheet.create({
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
      }),
    [],
  );

  return {
    colors,
    sizes,
    globalStyles,
    styles,
  };
};
