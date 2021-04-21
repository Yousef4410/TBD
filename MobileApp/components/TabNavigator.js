import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const FindScreen = () => {
  return (
    <View style={styles.center}>
      <Text>test</Text>
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
});

export default TabNavigator;
