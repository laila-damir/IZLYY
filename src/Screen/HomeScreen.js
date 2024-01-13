import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';

function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#FBF8F2' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="bookmark-outline" size={30} color="#BFA054"/>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Your Wedding</Text>
                </View>
                <Ionicons name="person-circle" size={30} color="#BFA054" />
            </View>

            <View style={{ marginTop: 20 }}>
                <Image source={require('../assets/Home1.png')} style={{ width: '100%', height: 180, borderRadius: 10 }} />
                <View style={{ position: 'absolute', top: 90, width: '100%', height: 54, backgroundColor: '#FBF8F2', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 17,fontFamily:'DMSerifDisplay-Italic' }}>Hatim and Meryem</Text>
                </View>
            </View>

            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ backgroundColor: '#FBF8F2', width: '70%', flexDirection: 'row', alignItems: 'center', paddingVertical: 5, justifyContent: 'space-between', paddingHorizontal: 20, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="caret-forward" size={30} color="#BFA054" />
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 5 }}>All in one</Text>
                        </View>
                    </View>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, color: '#BFA054', fontWeight: 'bold', marginLeft: 10 }}>View All</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <Image source={require('../assets/Home2.png')} style={{ width: '30%', height: 106, borderRadius: 10, marginRight: 10 }} />
                <Image source={require('../assets/Home3.png')} style={{ width: '30%', height: 106, borderRadius: 10, marginRight: 10 }} />
                <Image source={require('../assets/Home4.png')} style={{ width: '30%', height: 106, borderRadius: 10 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Image source={require('../assets/Home5.png')} style={{ width: '30%', height: 106, borderRadius: 10, marginRight: 10 }} />
                <Image source={require('../assets/Home6.png')} style={{ width: '30%', height: 106, borderRadius: 10, marginRight: 10 }} />
                <Image source={require('../assets/Home7.png')} style={{ width: '30%', height: 106, borderRadius: 10 }} />
            </View>

            <Text style={{ color: '#BFA054', fontSize: 17, textAlign: 'center', marginTop: 20,fontFamily:'ComforterBrush-Regular.ttf' }}>
                Customize your wedding now
            </Text>
        </View>
    );
}

export default HomeScreen;
