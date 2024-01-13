// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
    Startscreen,
    AddGuest,
    SignUpScreen,
    GuestsScreen,
    LoginScreen,
    ResetPassword,
    HomeScreen,
    FavoritesScreen, BeautyScreen, FoodScreen, MoreScreen, PlanningScreen
} from './src/Screen';
import { useFonts } from "expo-font";
import {AppRegistry} from "react-native";
import MainTabs from "./src/Screen/MyTabs";

const Stack = createStackNavigator();

function App() {
    const [fontsLoaded] = useFonts({
        'IslandMoments-Regular': require('./src/assets/fonts/IslandMoments-Regular.ttf'),
        'DMSerifDisplay-Italic': require('./src/assets/fonts/DMSerifDisplay-Italic.ttf'),
        'fontisto': require('./src/assets/fonts/fontisto.ttf'),
        'ComforterBrush-Regular.ttf': require('./src/assets/fonts/ComforterBrush-Regular.ttf'),
        'DMSerifDisplay-Regular': require('./src/assets/fonts/DMSerifDisplay-Regular.ttf'),


    });

    if (!fontsLoaded) {
        return null;
    }



    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Startscreen" headerMode="none">
                <Stack.Screen name="Startscreen" component={Startscreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

                <Stack.Screen name="HomeScreen" component={MainTabs} />
                <Stack.Screen name="GuestsScreen" component={GuestsScreen} />
                <Stack.Screen name="AddGuest" component={AddGuest} />
                <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />



            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
