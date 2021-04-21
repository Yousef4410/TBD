import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
import PostItem from "./PostItem";
import Color from "../constants/colors";

/* mobile marketplace */
const FindScreen = () => {
  /* getPosts API logic */
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     // This line is changed per API call, change sub to API name
  //     const apiResult = await axios.get("http://localhost:5000/posts/get");
  //     setPosts(await apiResult.data);
  //   })();
  // }, []);

  return (
    <View style={styles.screen}>
      <PostItem description="this my guy" />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.center}>
      <Text>profile goes here</Text>
    </View>
  );
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
    flex: 1,
    padding: 10,
    backgroundColor: "#334B68",
    marginTop: 25,
  },
  marketplace: {
    fontSize: 50,
    marginBottom: 20,
  },
});

export default TabNavigator;
