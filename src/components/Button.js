import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const ButtonScreen = ({ title, onPress }) => {
    return <TouchableOpacity onPress={onPress} >
        <LinearGradient colors={["#f12711", "#f5af19"]} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 16,
        paddingVertical: 14,
        marginVertical: 5,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 25,
        // alignItems: "center",
        // justifyContent: "center",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // marginHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: "bold",
        textTransform: 'uppercase',
        fontSize: 26,
        textAlign: 'center',
        marginVertical: 5
    }
})
export default ButtonScreen;