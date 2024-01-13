import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import BackButton from '../components/Backbutton';
import { useNavigation } from '@react-navigation/native';
import MainTabs from "./MyTabs";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <BackButton goBack={navigation.goBack} />
            <Image source={require('../assets/weddlogo.png')} style={styles.logo} />
            <Text style={styles.header}>Welcome</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    returnKeyType="next"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    returnKeyType="done"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />
            </View>

            <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                    <Text>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <Text>You do not have an account yet?</Text>
            </View>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={[styles.link, { color: '#FFD700' }]}>Create!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5', // Light gray background color
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    forgotPassword: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFD700', // Gold color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF', // White text color
        fontSize: 16,
        fontWeight: 'bold',
    },
    row: {
        marginBottom: 10,
    },
    link: {
        color: '#3498DB', // Blue link color
    },
});

export default LoginScreen;
