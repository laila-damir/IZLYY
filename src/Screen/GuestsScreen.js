import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Box, FlatList, Heading, VStack, NativeBaseProvider } from "native-base";
import {useRoute} from "@react-navigation/native";

const GuestsScreen = ({ route }) => {
    const { guests } = route.params;
    const guestsSet = new Set(guests);

    console.log(guestsSet);
    return (
        <NativeBaseProvider>
            <Box>
                <Heading style={{ fontSize: 20, color: "#BFA054", marginTop: 10, fontFamily: 'DMSerifDisplay-Italic' }}>
                    Guests List
                </Heading>
                <FlatList
                    data={guests}
                    renderItem={({ item }) => (
                        <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                            <VStack>
                                <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                                    {item.fullName}
                                </Text>
                            </VStack>
                        </Box>
                    )}
                />
            </Box>
        </NativeBaseProvider>
    );
};

export default GuestsScreen;
