import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Center from "./Center";
import { Text, View } from "react-native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Center>
      <Text>home</Text>
    </Center>
  );
};

const Search = () => {
  return (
    <Center>
      <Text>search</Text>
    </Center>
  );
};

const Message = () => {
  return (
    <Center>
      <Text>message</Text>
    </Center>
  );
};

const AppTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Message" component={Message} />
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
