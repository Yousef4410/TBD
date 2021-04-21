import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const ProfileHeader = (props) => {
  return (
    <View>
      <View style={styles.strip}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri:
                  "https://thehartfordinformer.com/wp-content/uploads/2019/01/tips.jpg",
              }}
            ></Image>
          </View>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 30 }}>{props.username}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 1000000,
    borderColor: "#334B68",
    borderWidth: 3,
  },
  strip: {
    marginTop: 50,
    elevation: 10,
    backgroundColor: "#DBF2FF",
    width: "100%",
    height: 150,
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  imageContainer: {
    marginLeft: 15,
  },
  textContainer: {
    justifyContent: "center",
    width: 300,
    marginLeft: 30,
  },
});

export default ProfileHeader;
