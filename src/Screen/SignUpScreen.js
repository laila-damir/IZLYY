import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,Image,StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Button } from 'react-native-paper';
import BackButton from '../components/Backbutton'


export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onSignUpPressed = () => {

    console.log('Sign up pressed');
  };

  return (
    <View >
    <BackButton goBack={navigation.goBack} />
    <Image
        source={require('../assets/weddlogo.png')} 
        style={styles.logo}
      />
      <Text style={styles.header}>Welcome</Text>
    <View style={styles.container}>
  <TextInput
    placeholder="Name"
    returnKeyType="next"
    value={name.value}
    onChangeText={(text) => setName({ value: text, error: '' })}
    error={!!name.error}
    errorText={name.error}
    style={styles.input}
  />

  <TextInput
    placeholder="Email"
    returnKeyType="next"
    value={email.value}
    onChangeText={(text) => setEmail({ value: text, error: '' })}
    error={!!email.error}
    errorText={email.error}
    autoCapitalize="none"
    autoCompleteType="email"
    textContentType="emailAddress"
    keyboardType="email-address"
    style={styles.input}
  />

  <TextInput
    placeholder="Password"
    returnKeyType="done"
    value={password.value}
    onChangeText={(text) => setPassword({ value: text, error: '' })}
    error={!!password.error}
    errorText={password.error}
    secureTextEntry
    style={styles.input}
  />
</View>


      <Button mode="contained" onPress={onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={{ marginTop:30,}}>I already have an account!</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
logo: {
  marginTop:150,
    marginLeft:130,
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  header: {
    marginLeft:150,
    marginTop:60,
    alignItems: 'center',
    fontSize: 20,
    marginBottom:30,
    fontWeight: 'bold',
  },
  button: {
    width: 140, 
    height: 35,
    marginTop: 40,
    marginLeft:140,
    backgroundColor:"#6CBAC4",

  },
  row: {
    marginLeft:120,
    flexDirection: 'row',
  },
  link: {
    marginLeft:70,
    color: 'blue',
  },
  input: {
    marginLeft:100,
    width: 200, 
    height: 40, 
    marginTop: 10, 
    fontWeight: 'bold', 
  },
});


