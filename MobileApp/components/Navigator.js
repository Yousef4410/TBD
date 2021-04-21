import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import authLogin from "./authLogin";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>login here</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Auth0");
        }}
      />
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
        initialRouteName="Marketplace"
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen name="Auth0" component={authLogin} />
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
