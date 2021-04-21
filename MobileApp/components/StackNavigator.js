import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LoginScreen = () => {
  return (
    <View style={styles.center}>
      <Text>login here</Text>
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

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Marketplace">
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

export default StackNavigator;
