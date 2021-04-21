import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
import PostItem from "./PostItem";
import Color from "../constants/colors";
import MarketplaceView from "./MarketplaceView";
import ProfileView from "./ProfileView";

/* mobile marketplace */
const FindScreen = () => {
  /* getPosts API logic */
  const [posts, setPosts] = useState([]);

  // "http://localhost:5000/posts/get"

  // useEffect(() => {
  //   fetch("http://localhost:5000/posts/get")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       console.log(responseData);
  //     });
  // });

  return (
    <View style={styles.screen}>
      <MarketplaceView />
    </View>
  );
};

const ProfileScreen = () => {
  return <ProfileView />;
};

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    backgroundColor: "#334B68",
    marginTop: 25,
  },
  marketplace: {
    fontSize: 50,
    marginBottom: 20,
  },
});

export default TabNavigator;
