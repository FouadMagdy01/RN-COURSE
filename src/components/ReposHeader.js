import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
const RepoHeader = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/github.png')} style={styles.imagestyle} />
            <Text style={styles.text}> All Eepositorires</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 30,
        backgroundColor: "#000000",
        height: 180,
    },
    imagestyle: {
        width: 100,
        height: 100,
        marginLeft: 10
    },
    text: {
        color: "#FFFFFF",
        fontSize: 22,
        marginLeft: 15
    },

})
export default RepoHeader;