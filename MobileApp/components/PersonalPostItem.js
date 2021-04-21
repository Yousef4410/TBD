import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Color from "../constants/colors";
import ContactInfoPopup from "./ContactInfoPopup";

// justifyContent: organize elements along main axis (default: column)
// alignItems: organize elements along the cross axis (default: row)

// incoming props: description, title, price, imageUri

const PersonalPostItem = (props) => {
  return (
    <View style={styles.card}>
      <Image style={styles.tinyPicture} source={{ uri: props.imageUri }} />
      <View style={styles.postInfo}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.descText}>{props.description}</Text>
        <Text style={styles.descText}>{props.price}</Text>
      </View>
      <View style={styles.postButton}>
        <Button title="Delete" color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyPicture: {
    width: 230,
    height: 230,
    borderRadius: 30,
    marginTop: 20,
    // borderColor: Color.white,
    // borderWidth: 3,
  },
  card: {
    backgroundColor: Color.cardColor,
    width: 300,
    height: 500,
    elevation: 10,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  postInfo: {
    width: 230,
    height: 150,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  postButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 37,
  },
  descText: {
    fontSize: 18,
  },
});

export default PersonalPostItem;
