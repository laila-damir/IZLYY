import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StyleSheet,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const BeautyScreen = () => {
    const [spaFavorites, setSpaFavorites] = useState([]);
    const [makeupFavorites, setMakeupFavorites] = useState([]);
    const [neggafaFavorites, setNeggafaFavorites] = useState([]);

    const spaData = [
        { id: '1', name: 'Spa al manal', image: require('../assets/Beauty1.jpeg') },
        { id: '2', name: 'Jo beauty center', image: require('../assets/Beauty2.jpeg') },
        { id: '3', name: 'Bridal spa', image: require('../assets/Beauty3.jpeg') },
    ];

    const makeupData = [
        { id: '1', name: 'Enjoy makeup', image: require('../assets/Beauty4.jpeg') },
        { id: '2', name: 'Amine Castor', image: require('../assets/Beauty5.jpeg') },
        { id: '3', name: 'Abir be pretty', image: require('../assets/Beauty6.jpeg') },
    ];

    const neggafaData = [
        { id: '1', name: 'Dar Dmana', image: require('../assets/Beauty7.png') },
        { id: '2', name: 'Maria Neggafa', image: require('../assets/Beauty8.jpeg') },
        { id: '3', name: 'Hajja Berada', image: require('../assets/Beauty9.jpeg') },
    ];

    const handleFavoritePress = (itemId, setFavorites) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(itemId)
                ? prevFavorites.filter((favId) => favId !== itemId)
                : [...prevFavorites, itemId]
        );
    };

    const renderSectionItem = ({ item, setFavorites, favorites }) => (
        <View style={styles.imageItem}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.imageName}>{item.name}</Text>
                    <TouchableOpacity
                        style={styles.favoriteContainer}
                        onPress={() => handleFavoritePress(item.id, setFavorites)}
                    >
                        <Feather
                            name="heart"
                            size={20}
                            color={favorites.includes(item.id) ? 'red' : 'black'}
                            style={styles.heartIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderFavoriteIcon = () => (
        <TouchableOpacity
            style={styles.favoriteIconContainer}
            onPress={() => navigation.navigate('FavoritesScreen')}
        >
            <Ionicons name="heart" size={30} color="#BFA054" />
        </TouchableOpacity>
    );

    const renderSection = (sectionTitle, sectionData, setFavorites, favorites) => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{sectionTitle}</Text>
                <TouchableOpacity>
                    <Text style={styles.seeMore}> See more</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={sectionData}
                renderItem={({ item }) =>
                    renderSectionItem({ item, setFavorites, favorites })
                }
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.background}>
                <View style={styles.header}>
                    {renderFavoriteIcon()}
                    <Text style={styles.title}>Beauty</Text>
                    <Text style={{ color: 'black', fontSize: 17,fontFamily:'DMSerifDisplay-Italic' }}>Hatim and Meryem</Text>
                    <View style={styles.searchBar}>
                        <TextInput placeholder="Search" style={styles.input} />
                        <TouchableOpacity>
                            <Ionicons name="search" size={20} color="#BFA054" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="filter" size={20} color="#BFA054" style={styles.filterIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {renderSection('Spa and Hammam', spaData, setSpaFavorites, spaFavorites)}
            {renderSection('Makeup Artist', makeupData, setMakeupFavorites, makeupFavorites)}
            {renderSection('Neggafa', neggafaData, setNeggafaFavorites, neggafaFavorites)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
    },
    background: {
        backgroundColor: '#FBF8F2',
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#BFA054',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'DMSerifDisplay-Regular', // Use the registered font family
        textAlign: 'center',
        padding: 10,
        marginVertical: 10,
    },

    searchBar: {
        flexDirection: 'row',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
        paddingLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
    },
    filterIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    section: {
        paddingVertical: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    sectionTitle: {
        fontFamily: 'DMSerifDisplay-Regular', // Use the registered font family
        fontSize: 20,
        fontWeight: 'normal',
        marginBottom: 10,
    },
    imageItem: {
        marginRight: 20,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    infoContainer: {
        marginTop: 1,
        alignItems: 'center',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageName: {
        marginTop: 10,
        fontSize: 14,
        fontFamily: 'DMSerifDisplay-Italic', // Use the registered font family
        textAlign: 'center',
    },
    seeMore: {
        color: '#BFA054',
        fontSize: 12,
        marginLeft: 2,
    },
    favoriteIconContainer: {
        top: 50,
        left: 5,
        zIndex: 1,
    },
});

export default BeautyScreen;
