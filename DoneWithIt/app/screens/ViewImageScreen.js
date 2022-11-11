import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image  
            resizeMode="contain"
            style={styles.image} 
            source={require('../assets/goldencaves.png')} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1, //view takes entire screen
        backgroundColor: colors.black,
        justifyContent: "flex-start",
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;