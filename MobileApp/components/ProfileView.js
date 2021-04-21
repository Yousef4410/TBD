import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import ProfileHeader from "./ProfileHeader";

const ProfileView = () => {
  return (
    <View>
      <ScrollView>
        <ProfileHeader username="testdummy" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#334B68",
    marginTop: 25,
  },
});

export default ProfileView;
