import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
// rsf - react function shortkey
// rnss - react native style sheet
function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.png')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/crownicon.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

// rnss - react native style sheet
const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height:70,
        backgroundColor: '#fc5c65',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center",
    },
    logo: {
        width: 125,
        height: 100,
    },
    registerButton: {
        width: '100%',
        height:70,
        backgroundColor: '#4ecdc4',
    },
})

export default WelcomeScreen;