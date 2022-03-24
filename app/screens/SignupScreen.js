import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link } from "react-router-native";

function SignupScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          placehodlerTextColor="#003f5c"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          placehodlerTextColor="#003f5c"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placehodlerTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View>
        <Link to="/" underlayColor="#f0f4f7">
          <Text>Have an account? Sign In</Text>
        </Link>
      </View>

      <TouchableOpacity style={styles.signupBtn}>
        <Text>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#0ac4c4",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    marginBottom: 50,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fb9a31",
  },
});

export default SignupScreen;
