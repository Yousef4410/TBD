import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import authLogin from "./authLogin";
import LoginView from "./LoginView";

// to use the { navigation } object: "navigation.navigate("Destination");"
// "Destination must be equal to the "name" of one of the "Stack.Screen" components below

//e.g. <Button onPress={() => {navigation.navigate("Marketplace");}}
const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <LoginView navPointer={navigation} />
    </View>
  );
};

const MarketplaceScreen = (props) => {
  return <TabNavigator />;
};
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen name="Auth0" component={authLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigator;
