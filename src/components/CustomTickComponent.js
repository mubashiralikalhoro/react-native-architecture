import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Size from "../constants/size";
import color from "../constants/color";
import Icons from "../assets/icons";

const CustomTickComponent = ({ style, selected, setSelected }) => {
  return (
    <Pressable
      onPress={() => setSelected(!selected)}
      style={[styles.container(selected), style]}
    >
      {selected && <Image source={Icons.TICK} style={styles.image} />}
    </Pressable>
  );
};

export default CustomTickComponent;

const styles = StyleSheet.create({
  container: (selected) => ({
    width: Size.ICON * 0.4,
    height: Size.ICON * 0.4,
    borderRadius: Size.ICON,
    backgroundColor: selected ? color.PRIMARY : color.BACKGROUND,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  }),
  image: {
    width: Size.ICON * 0.3,
    height: Size.ICON * 0.3,
    tintColor: color.PRIMARY_TEXT,
  },
});
