import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostItem = () => {
  return (
    <View style={styles.postContainer}>
      <Image
        style={styles.tinyPicture}
        source={require("../assets/favicon.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyPicture: {
    width: 150,
    height: 150,
  },
  postContainer: {
    alignItems: "center",
  },
});

export default PostItem;
