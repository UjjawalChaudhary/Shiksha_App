import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

 const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendCred = () => {
    fetch('http://192.168.41.129:8000/users/login', {
      method: 'POST',
      headers: {
          Accept: "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          email: email,
         password: password,
      }),
    })
      .then((response) => {response.json()
      if (response.status === 200){
        navigation.navigate('Entry');
  
      }
      } )
      .then((data) => {
   
      });
  };
  
  return (
    <View
      style={{
        backgroundColor: "#F7F4EA",
        flex: 1,
        paddingVertical: 190,
        borderRadius: null,
      }}
    >
      <Text style={styles.baseText}>
        Welcome
        <Text style={styles.innerText}> Learner</Text>
      </Text>

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

      <View style={styles.btn}>
     <Button onPress={() => sendCred()} title="Login" color="green"></Button>

      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: "#36485f",
    borderWidth: 1,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingLeft:10
  },
  baseText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  innerText: {
    fontSize: 30,
    color: "green",
    marginTop: 100,
    alignSelf: "center",
  },
  btn: {
    alignSelf: "center",
    borderRadius: 90,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
});

export default Login;

