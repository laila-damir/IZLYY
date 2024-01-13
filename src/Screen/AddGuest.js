// AddGuestScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddGuest = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { onAddGuest } = route.params;

    const [guestInfo, setGuestInfo] = useState({
        fullName: '',
    });

    const handleAddGuest = () => {
        onAddGuest(guestInfo);
        navigation.goBack();
    };

    return (
        <View>
            <Text style={{ fontSize: 20, color: '#BFA054', fontWeight: 'bold', fontFamily: 'IslandMoments-Regular' }} >Add Guest</Text>
            <TextInput
                placeholder="Full Name"
                onChangeText={(text) => setGuestInfo((prev) => ({ ...prev, fullName: text }))}
            />
            <Button title="Add Guest" onPress={handleAddGuest} />
        </View>
    );
};

export default AddGuest;
