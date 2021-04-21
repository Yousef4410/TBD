import React from "react";
import { View, Text, StyleSheet, Image, ColorPropType } from "react-native";
import Color from "../constants/colors";

// justifyContent: organize elements along main axis (default: column)
// alignItems: organize elements along the cross axis (default: row)
const PostItem = (props) => {
  return <View style={styles.card}></View>;
};

const styles = StyleSheet.create({
  tinyPicture: {
    width: 150,
    height: 150,
    borderRadius: 30,
    // borderColor: Color.white,
    // borderWidth: 3,
  },
  card: {
    backgroundColor: Color.cardColor,
    width: "80%",
    height: "80%",
    elevation: 10,
    borderRadius: 30,
    marginVertical: 30,
  },
  imageContainer: {
    flex: 3,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
});

export default PostItem;
