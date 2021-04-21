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

const Marketplace = (props) => {
  return <TabNavigator />;
};
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Marketplace"
          options={{ header: () => null }}
          component={Marketplace}
        />
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
