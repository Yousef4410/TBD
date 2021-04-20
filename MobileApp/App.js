import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import * as React from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import Center from "./components/Center";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

// You need to swap out the Auth0 client id and domain with the one from your Auth0 client.
// In your Auth0 client, you need to also add a url to your authorized redirect urls.
//
// For this application, I added https://auth.expo.io/@arielweinberger/with-auth0 because I am
// signed in as the 'arielweinberger' account on Expo and the name/slug for this app is 'with-auth0'.
//
// You can open this app in the Expo client and check your logs to find out your redirect URL.

const auth0ClientId = "Ajj8vm5QhqdxzOry1D9YJHiZyPQLvQAN";
const authorizationEndpoint = "https://dev-smzgyb-n.us.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function App() {
  const [name, setName] = React.useState(null);
  const { isAuthenticated } = useAuth0();
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  console.log(`Redirect URL: ${redirectUri}`);

  React.useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
      }
    }
  }, [result]);

  const Stack = createStackNavigator();

  // thanks to ECMAScript 6 (ES6), "object destructuring" is used to
  // pull the "navigation" key out of the "props" object
  const LoginScreen = ({ navigation }) => {
    return (
      <Center>
        <Text>I am a login screen</Text>
        <Button
          title="go to register"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </Center>
    );
  };

  const RegisterScreen = ({ navigation }) => {
    return (
      <Center>
        <Text>I am a register screen</Text>
        <Button
          title="go to login"
          onPress={() => {
            navigation.navigate("MarketPlace");
          }}
        />
      </Center>
    );
  };

  const MarketPlace = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      (async () => {
        const apiResult = await axios.get("http://localhost:5000/posts/get"); // This line is changed per API call, change sub to API name
        setPosts(await apiResult.data);
      })();
    });

    return (
      <Grid container justify="center" height="100%">
        <div>{JSON.stringify(posts)}</div>
      </Grid>
    );
  };

  // "initialRouteName" prop determines the starting screen
  // "initialRouteName" prop points to the "name" prop of a Stack.Screen
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MarketPlace" component={MarketPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// LOGIN PAGE JSX
/*
<View style={styles.container}>
      {name ? (
        <>
          <Text style={styles.title}>You are logged in, {name}!</Text>
          <Button title="Log out" onPress={() => setName(null)} />
        </>
      ) : (
        <Button
          disabled={!request}
          title="Log in with Auth0"
          onPress={() => promptAsync({ useProxy })}
        />
      )}
    </View>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
