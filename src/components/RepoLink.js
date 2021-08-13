import React from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';
const RepoLink = ({ onPress }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}> Click Here To Open Repo Page</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "teal",
        marginTop: 16,
        alignSelf: "center",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    text: {
        color: "white",
    }
})
export default RepoLink;