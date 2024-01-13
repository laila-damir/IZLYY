import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import PlanningScreen from './PlanningScreen';
import FoodScreen from './FoodScreen';
import BeautyScreen from './BeautyScreen';
import MoreScreen from './MoreScreen';
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

function MainTabs() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'gold',
                inactiveTintColor: 'black',
                style: {
                    backgroundColor: 'white', // Background color of the tabs
                    borderTopWidth: 1,
                    borderTopColor: 'gold', // Top border color
                },
                labelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Ionicons name="md-home" size={size} color={color} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Planning"
                component={PlanningScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Planning')}>
                            <Ionicons name="md-calendar" size={size} color={color} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Food"
                component={FoodScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                            <Ionicons name="md-restaurant" size={size} color={color} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Beauty"
                component={BeautyScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Beauty')}>
                            <MaterialCommunityIcons name="lipstick" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('More')}>
                            <Feather name="more-horizontal" size={24} color="gold" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTabs;
