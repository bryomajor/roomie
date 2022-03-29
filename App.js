import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/SignupScreen";

import { useReducer } from "react";
import { StateContext, reducer, initialState } from "./app/state/State";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext value={{ ...state, dispatch }}>
      <NativeRouter>
        {/* <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Login</Text>
        </Link>
      </View>
    </View> */}

        <Route exact path="/" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
      </NativeRouter>
    </StateContext>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default App;
