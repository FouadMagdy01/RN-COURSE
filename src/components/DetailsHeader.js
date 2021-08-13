import React from "react";
import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
const details = ({ title, imageSrc }) => {
    return (
        <View >
            <View style={styles.headerStyle}>
                <Image style={styles.image}
                    source={{ uri: imageSrc }} />
                <View style={styles.titleStyle}>
                    <Text style={styles.TextStyle}>{title}</Text>
                </View>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    image: {
        width: 75,
        height: 75,
    },
    headerStyle: {
        paddingBottom: 25,
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#E7E7E7"
    },
    titleStyle: {
        justifyContent: "center",
        marginLeft: 15
    },
    TextStyle: {
        fontSize: 17,
    },

})

export default details;