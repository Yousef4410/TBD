import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import ProfileHeader from "./ProfileHeader";
import PersonalPostItem from "./PersonalPostItem";

const ProfileView = () => {
  return (
    <View>
      <ScrollView>
        <ProfileHeader username="testdummy" />

        <View style={styles.buttonContainer}>
          <Button title="Add Post" color="green" />
        </View>

        <View alignItems="center">
          <PersonalPostItem
            title="good lord"
            description="need help"
            price="$0"
            imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjfD0Bxfnju5eETjsKjxzH6HCfyfCZ9leLuyZWKUR2ZnP4_h2pADYLrDo80bpn3SZSn0&usqp=CAU"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#334B68",
    marginTop: 25,
  },
  buttonContainer: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileView;
