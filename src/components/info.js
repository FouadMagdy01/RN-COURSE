import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
const Info = ({ IconName, iconColor, iconSize, text,
    textStyle, }) => {
    return (
        <View style={styles.container} >
            <Ionicons name={IconName} size={iconSize} color={iconColor} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 3,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
        borderColor: "#E7E7E7",

    },
    text: {
        fontSize: 14,
        marginStart: 4,
    },
})
export default Info;