// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Shiksha</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        backgroundColor: "#F7F4EA",
        flex: 1,
        paddingVertical: 170,
        borderRadius: null,
      }}
    >
      <Text style={styles.baseText}>
        Welcome to
        <Text style={styles.innerText}> Shiksha</Text>
      </Text>

      <View
        style={{
          paddingHorizontal: 8,
          paddingTop: 20,
        }}
      >
        <TextInput
          style={styles.input}
          label="name"
          mode="outlined"
          placeholder="Name"
          placeholderTextColor="#36485f"
          value={name}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          label="phone"
          mode="outlined"
          placeholder="Phone"
          placeholderTextColor="#36485f"
          value={phone}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setNumber(text)}
        />

        <TextInput
          style={styles.input}
          label="email"
          mode="outlined"
          placeholder="Email"
          placeholderTextColor="#36485f"
          value={email}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="password"
          mode="outlined"
          placeholder="Password"
          placeholderTextColor="#36485f"
          value={password}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.btn2}>
        <Button
          onPress={() => sendCred()}
          title="Register"
          color="#0040ff"
        ></Button>
      </View>
      <View>
        <Text style={styles.formText}>Already Have an Account</Text>
        <View
          style={{
            padding: 1,
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          <View style={styles.btn}>
            <Button
              style={styles.btn}
              onPress={() => navigation.navigate("Login")}
              title="Login"
              color="#0040ff"
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#36485f",
    borderWidth: 2,
    borderRadius: 10,
    padding: 4,
    color: "black",
    paddingLeft: 10,
    textShadowColor: "black",
  },
  baseText: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
  },
  innerText: {
    fontSize: 32,
    color: "green",
    marginTop: 100,
    alignSelf: "center",
  },
  innerText2: {
    fontSize: 32,
    color: "#587792",
    marginTop: 100,
    alignSelf: "center",
  },
  formText: {
    fontSize: 18,
    height: 35,
    alignSelf: "center",

    borderRadius: 10,
  },
  btn: {
    alignSelf: "center",
    borderRadius: 20,
    height: 60,
    width: 160,

    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  btn2: {
    alignSelf: "center",
    borderRadius: 90,
    height: 60,
    width: 250,
    paddingVertical: 2,
    paddingHorizontal: 40,
    marginTop: 15,
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
  },
});

export default Registration;
