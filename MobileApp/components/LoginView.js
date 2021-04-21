import React from "react";
import { View, Button, Image, StyleSheet, TextInput } from "react-native";
import Color from "../constants/colors";

// props passed: {navigation}
const LoginView = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.everythingContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/tradeU-logo2.png")}
          ></Image>
        </View>
        <View style={styles.credentialsContainer}>
          <View backgroundColor="white">
            <TextInput style={styles.entryField} placeholder="Username" />
          </View>
          <View backgroundColor="white">
            <TextInput
              style={styles.entryField}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            title="Login"
            color="#0E788F"
            onPress={() => {
              props.navPointer.navigate("Marketplace");
            }}
          />
          {/*<Button title="Create Account" color="#0E788F" */}
          <Button title="Forgot Password?" color="#0E788F" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.primary,
    marginTop: 25,
  },
  everythingContainer: {
    height: 690,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 270,
    height: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    marginBottom: 25,
  },
  credentialsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 100,
  },
  entryField: {
    width: 190,
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
  },
  buttonsContainer: {
    marginTop: 30,
    height: 90,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default LoginView;
