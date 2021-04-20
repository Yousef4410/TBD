import React, { useState } from "react";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

// Context is a React API that allows state to be passed around easier
// it is used in this app to determined if a user is logged in or not
export const AuthContext = React.createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakerUser = { username: "bob" };
          setUser(fakeUSer);
          AsyncStorage.setItem("user", JSON.stringify(fakerUser));
        },
        logout: () => {
          AsyncStorage.moveItem("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
