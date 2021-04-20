import React from "react";
import { View, StyleSheet } from "react-native";

const Center = ({ children }) => {
  return <View style={styles.centeredView}>{children}</View>;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Center;
