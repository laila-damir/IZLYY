import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';

function MoreScreen() {
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
                <Image source={require('../assets/more1.png')} style={{ width: '100%', height: 180, borderRadius: 10 }} />
                <View style={{ position: 'absolute', top: 90, width: '100%', height: 54, backgroundColor: '#FBF8F2', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 17, fontFamily: 'DMSerifDisplay-Italic' }}>Hatim and Meryem</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10, width: '100%' }}>
                <View style={{ alignItems: 'center', width: '30%' }}>
                    <Image source={require('../assets/More1.jpeg')} style={{ width: '100%', height: 106, borderRadius: 10 }} />
                    <Text style={{ fontFamily:'IslandMoments-Regular' ,marginTop: 5, color: '#BFA054', fontSize: 18, textAlign: 'center' }}>Artists</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: '100%' }}>
                <View style={{ alignItems: 'center', width: '30%' }}>
                    <Image source={require('../assets/More2.jpeg')} style={{ width: '100%', height: 106, borderRadius: 10 }} />
                    <Text style={{ fontFamily:'IslandMoments-Regular' ,marginTop: 5, color: '#BFA054', fontSize: 18, textAlign: 'center' }}>Wedding Halls</Text>
                </View>
                <View style={{ alignItems: 'center', width: '30%' }}>
                    <Image source={require('../assets/More3.jpeg')} style={{ width: '100%', height: 106, borderRadius: 10 }} />
                    <Text style={{ fontFamily:'IslandMoments-Regular' ,marginTop: 5, color: '#BFA054', fontSize: 18, textAlign: 'center' }}>Photographer</Text>
                </View>
            </View>

            <Text style={{ color: '#BFA054', fontSize: 17, textAlign: 'center', marginTop: 20, fontFamily: 'ComforterBrush-Regular.ttf' }}>
                Customize your wedding now
            </Text>
        </View>
    );
}

export default MoreScreen;
