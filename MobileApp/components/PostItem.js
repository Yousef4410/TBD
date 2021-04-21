import React from "react";
import { View, Text, StyleSheet, Image, ColorPropType } from "react-native";
import Color from "../constants/colors";

const PostItem = (props) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.card}>
        <Image
          style={styles.tinyPicture}
          source={{
            uri:
              "https://preview.redd.it/kjkj7wmsabh41.jpg?auto=webp&s=e4af665b106c86a42d4c3cbcbb622884676b8741",
          }}
        ></Image>
      </View>
      <View>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyPicture: {
    width: 300,
    height: 300,
    borderRadius: 15,
    borderColor: Color.white,
    borderWidth: 3,
  },
  postContainer: {
    alignItems: "center",
  },
  card: {
    backgroundColor: Color.white,
    elevation: 7,
    alignItems: "center",
    borderRadius: 10,
  },
});

export default PostItem;
