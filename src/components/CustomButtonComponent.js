import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Size from "../constants/size";
import color from "../constants/color";
import GlobalStyle from "../constants/globalStyle";

const CustomButtonComponent = ({
  style,
  textStyle,
  onPress,
  onLongPress,
  title,
  icon,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity ? activeOpacity : 0.4}
    >
      <View style={[styles.container, style]}>
        {icon && (
          <Image
            source={icon}
            style={[styles.iconStyle, { tintColor: textStyle.color }]}
          />
        )}
        <View style={{ flex: 1 }} />
        <Text style={[styles.text, textStyle]}>{title}</Text>
        <View style={{ flex: 1 }} />
        {icon && <View style={styles.iconStyle} />}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonComponent;

const styles = StyleSheet.create({
  container: {
    width: Size.WIDTH * 0.5,
    height: Size.ICON,
    backgroundColor: color.SKY_BLUE,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Size.BORDER_RADIUS,
  },
  text: {
    ...GlobalStyle.TEXT_STYLE,
    color: color.PRIMARY_TEXT,
  },
  iconStyle: {
    marginHorizontal: Size.PADDING,
    width: Size.ICON * 0.5,
    height: Size.ICON * 0.5,
  },
});
