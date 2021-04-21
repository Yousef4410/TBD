import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>login here</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Marketplace");
        }}
      />
    </View>
  );
};

const Marketplace = () => {
  return (
    <View style={styles.center}>
      <Text>posts go here</Text>
    </View>
  );
};

const FindScreen = () => {
  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>profile goes here</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Marketplace" component={Marketplace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navigator;
