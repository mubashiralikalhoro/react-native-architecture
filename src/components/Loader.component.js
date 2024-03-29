import React from "react";
import {
  View,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function index(props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.lModalView}>
        <ActivityIndicator size={"large"} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  lModalView: {
    height,
    width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
