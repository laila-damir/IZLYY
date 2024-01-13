import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground,Image,StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Button } from 'react-native-paper';
import BackButton from '../components/Backbutton'

export default function Startscreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/Tradition.jpeg')}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', fontFamily: 'IslandMoments-Regular' }}>IZLY</Text>
        <Text style={{ fontSize: 20, color: 'white', marginTop: 10, fontFamily: 'DMSerifDisplay-Italic' }}>
          Let's plan your wedding
        </Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#E0C7AA',
              padding: 10,
              margin: 10,
              borderRadius: 5,
              marginTop: 500,
            }}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#E0C7AA',
              padding: 10,
              margin: 10,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
