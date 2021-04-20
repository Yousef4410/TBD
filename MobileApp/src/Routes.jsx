import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from 'react-native'

const Stack = createStackNavigator();

function Login() {
  return (
    <View>
      <Text>I am a login screen</Text>
    </View>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;