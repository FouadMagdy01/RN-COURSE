import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
const InfoSquare = ({ IconName, iconColor, number, title, color }) => {
    return (
        <View style={styles.box}>
            <Ionicons name={IconName} size={36} color={iconColor} />
            <Text>{title}</Text>
            <Text style={{ color: color }}>{number} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    box: {
        height: 110,
        width: 100,
        borderWidth: 1.8,
        borderColor: "#E7E7E7",
        marginTop: 10,
        alignItems: "center",
        paddingTop: 18,
    },

})
export default InfoSquare;