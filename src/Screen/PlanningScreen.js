// PlanningScreen.js
import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import WeeklyCalendar from 'react-native-weekly-calendar';
import { StyleSheet } from 'react-native';
import {
    NativeBaseProvider,
    Heading,
} from 'native-base';
const PlanningScreen = ({ navigation}) => {

    let data = [
        {
            fullName: "Amina El Khattabi",
        },
        {
            fullName: "Omar Boujemaa",
        },
        {
            fullName: "Nadia Laaroussi",
        },
        {
            fullName: "Youssef El Amrani",
        },
        {
            fullName: "Sara El Fassi",
        }
    ];
    const [guests, setGuests] = useState(new Set(data));
    const endDate = "24/05/2024";
    const convertDateFormat = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
    };
    const calculateDaysLeft = () => {
        const now = new Date();
        const end = new Date(convertDateFormat(endDate));
        const timeDiff = end.getTime() - now.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysLeft;
    };

    const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());
        useEffect(() => {
            const interval = setInterval(() => {
                setDaysLeft(calculateDaysLeft());
            }, 1000); // Update every second

            return () => clearInterval(interval);
        }, []);
    const onAddGuest = (newGuest) => {
        console.log(newGuest)
        setGuests((prevGuests) => new Set([...prevGuests, newGuest]));
        console.log(guests)
    };
    const sampleEvents = [
            {'start': '2024-01-09 09:00:00', 'duration': '00:20:00', 'note': 'Meet with florist'},
            {'start': '2024-03-24 14:00:00', 'duration': '01:00:00', 'note': 'Appointment with wedding planner'},
            {'start': '2024-03-25 08:00:00', 'duration': '00:30:00', 'note': 'Finalize guest list'},
            {'start': '2024-03-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with caterer'},
            {'start': '2024-03-25 19:00:00', 'duration': '01:00:00', 'note': 'Tasting session for wedding cake'},
            {'start': '2024-03-26 09:30:00', 'duration': '01:00:00', 'note': 'Dress fitting appointment'},
            {'start': '2024-03-26 11:00:00', 'duration': '02:00:00', 'note': 'Discuss music choices with DJ'},
            {'start': '2024-03-26 15:00:00', 'duration': '01:30:00', 'note': 'Visit wedding venue'},
            {'start': '2024-03-26 18:00:00', 'duration': '02:00:00', 'note': 'Review seating arrangements'},
            {'start': '2024-03-26 22:00:00', 'duration': '01:00:00', 'note': 'Finalize wedding vows'},
        ];

        return (
            <NativeBaseProvider>
                <View style={styles.container}>
                    <View
                        style={{
                            backgroundColor: '#FBF8F2',
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 5,
                            justifyContent: 'space-between',
                            position: 'absolute',
                            top: 0,
                        }}
                    >
                        <Text style={{
                            marginRight: 150,
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'bold'
                        }}>
                            Planning
                        </Text>
                    </View>
                    <Text style={{ color: 'white', fontSize: 17, textAlign: 'center', marginTop: 5 ,width: 390,borderRadius:5,backgroundColor:'#BFA054',padding: 20,fontFamily:'DMSerifDisplay-Italic'}}>
                        Hatim and Meryem
                    </Text>
                    <WeeklyCalendar events={sampleEvents} style={{height: 400, marginTop: 50}}/>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 10}}>
                        <View style={{borderRadius: 10, overflow: 'hidden'}}>
                            <Image
                                source={require('../assets/Guests.png')}
                                style={{width: 80, height: 80, borderRadius: 10}}
                            />
                        </View>
                        <View style={{marginLeft: 10, flex: 1}}>
                            <TouchableOpacity onPress={() => navigation.navigate('GuestsScreen', { guests: [...guests] })}>
                                <Heading size="md" ml="-1" color="black">
                                    Guests List
                                </Heading>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Ionicons name="checkmark-done" size={20} color="green"/>
                                <Text style={{fontSize: 14, color: 'green', marginLeft: 5}}>Completed</Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate('AddGuest', { onAddGuest })}>
                                    <Ionicons name="add-circle" size={20} color="black" />
                                </TouchableOpacity>

                            </View>
                        </View>


                        <View style={{backgroundColor: "#faebd7", padding: 10, borderRadius: 10}}>
                            <Text style={{fontSize: 14}}>Wedding</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Ionicons name="calendar" size={20} color="#b8860b" style={{marginRight: 5}}/>
                                <Text style={{
                                    fontSize: 20,
                                    color: '#b8860b',
                                    marginRight: 5,
                                    fontWeight: "bold"
                                }}>{daysLeft} Days</Text>
                            </View>
                            <Text style={{fontSize: 9}}>{endDate}</Text>
                        </View>
                    </View>


                </View>
            </NativeBaseProvider>
        );

    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });

export default PlanningScreen;
