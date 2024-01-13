import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,Image,StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';


export default function ResetPassword({ navigation }) {  
    const [email, setEmail] = useState({ value: '', error: '' });
     const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }
  
    return (
      <View >
      <Image
          source={require('../assets/weddlogo.png')} 
          style={styles.logo}
        />
        <Text style={styles.header}>Reset Your Password</Text>
      <View style={styles.container}>
    
  
    <TextInput
        label="Email"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive an email with the reset link."
        style={styles.input}

      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={styles.button}
      >
        Continue
      </Button>
  
  </View>
  </View>
  
 )
}
  const styles = StyleSheet.create({
    logo: {
    marginTop:200,
      marginLeft:130,
      width: 150,
      height: 150,
      marginBottom: 8,
    },
    header: {
      marginLeft:130,
      marginTop:60,
      alignItems: 'center',
      fontSize: 18,
      marginBottom:30,
      fontWeight: 'bold',
      color:'#6CBAC4'
    },
   button: {
     marginTop:50,
      width: 140, 
      height: 35,
      marginLeft:140,
      backgroundColor:"#6CBAC4",
  
    },
    input: {
      marginLeft:100,
      width: 230, 
      height: 40, 
      marginTop: 10, 
      fontWeight: 'bold', 
    },
  });
