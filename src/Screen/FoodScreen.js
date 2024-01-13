import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { NativeBaseProvider, Slider, Heading } from 'native-base';

function FoodScreen() {
    const [entries, setEntries] = useState([
        'Thé & gateau marocain',
        'Jus et gateau soirée',
        'fruits secs',
        'amusebouche varié',
    ]);
    const [mainCourses, setMainCourses] = useState([
        'Mhencha',
        'djaj mhemer ',
        'pastilla au poisson',
        'pastilla aux poulet',
        'Lhem belberqouq',
    ]);
    const [desserts, setDesserts] = useState([
        'Fruits de saison (6 fruits)',
        'Fruits de saison (9 fruits)',
        'tarte glaçée',
    ]);

    const [checkedEntries, setCheckedEntries] = useState(
        new Array(entries.length).fill(false)
    );
    const [checkedMainCourses, setCheckedMainCourses] = useState(
        new Array(mainCourses.length).fill(false)
    );
    const [checkedDesserts, setCheckedDesserts] = useState(
        new Array(desserts.length).fill(false)
    );

    const [sliderValue, setSliderValue] = useState(50);

    const handleCheckboxChange = (category, index) => {
        switch (category) {
            case 'entries':
                setCheckedEntries((prev) => {
                    const updatedEntries = [...prev];
                    updatedEntries[index] = !updatedEntries[index];
                    return updatedEntries;
                });
                break;
            case 'mainCourses':
                setCheckedMainCourses((prev) => {
                    const updatedMainCourses = [...prev];
                    updatedMainCourses[index] = !updatedMainCourses[index];
                    return updatedMainCourses;
                });
                break;
            case 'desserts':
                setCheckedDesserts((prev) => {
                    const updatedDesserts = [...prev];
                    updatedDesserts[index] = !updatedDesserts[index];
                    return updatedDesserts;
                });
                break;
            default:
                break;
        }
    };

    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Entrées */}
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Entrées</Text>

                    {entries.map((entry, index) => (
                        <View key={index} style={styles.checkboxContainer}>
                            <CheckBox
                                style={styles.checkbox}
                                checked={checkedEntries[index]}
                                onPress={() => handleCheckboxChange('entries', index)}
                            />
                            <Text style={styles.checkboxLabel}>{entry}</Text>
                        </View>
                    ))}
                </View>

                {/* Plats */}
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Plats</Text>

                    {mainCourses.map((entry, index) => (
                        <View key={index} style={styles.checkboxContainer}>
                            <CheckBox
                                style={styles.checkbox}
                                checked={checkedMainCourses[index]}
                                onPress={() => handleCheckboxChange('mainCourses', index)}
                            />
                            <Text style={styles.checkboxLabel}>{entry}</Text>
                        </View>
                    ))}
                </View>

                {/* Desserts */}
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Desserts</Text>

                    {desserts.map((entry, index) => (
                        <View key={index} style={styles.checkboxContainer}>
                            <CheckBox
                                style={styles.checkbox}
                                checked={checkedDesserts[index]}
                                onPress={() => handleCheckboxChange('desserts', index)}
                            />
                            <Text style={styles.checkboxLabel}>{entry}</Text>
                        </View>
                    ))}
                </View>

                {/* Slider */}
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={100}
                    step={1}
                    value={sliderValue}
                    onValueChange={(value) => setSliderValue(value)}
                />
            </ScrollView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    categoryContainer: {
        marginTop: 20,
    },
    categoryTitle: {
        fontSize: 30,
        fontWeight: '400',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1E2742',
    },
    slider: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 20,
    },
});

export default FoodScreen;
