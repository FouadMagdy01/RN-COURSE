import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import Info from './info';
import limitTextLength from '../utils/limitTextLength'
const RepoCard = ({
    onPress,
    imageSrc,
    title,
    description,
    issuesNumber,
    starsNumber,
    providerName,
    numberOfLines,
}) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.view}>
                <Image source={{ uri: imageSrc }}
                    style={styles.imageStyle} />
                <View style={{ flexDirection: "column" }}    >
                    <Text style={styles.textSize} numberOfLines={1}>{limitTextLength(14, title)}</Text>
                    <Text style={styles.desc} numberOfLines={numberOfLines}> {limitTextLength(20, description)}</Text>
                </View>
            </View>
            <View style={styles.infocontainer}>
                <Info
                    IconName={"star"}
                    text={starsNumber}
                    iconSize={16}
                    iconColor={"#F8B703"} />
                <Info
                    IconName={"alert"}
                    text={issuesNumber}
                    iconSize={16}
                    iconColor={"#DD1212"} />
                <Info
                    IconName={"logo-github"}
                    text={providerName}
                    iconSize={16}
                    iconColor={"#000000"} />
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 35,
        borderWidth: 5,
        borderColor: "#E7E7E7",
        paddingHorizontal: 14,
        borderRadius: 8,
        paddingVertical: 1,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    textSize: {
        fontSize: 18,
        marginLeft: 15
    },
    desc: {
        fontSize: 14,
        marginLeft: 15
    },
    view: {
        flexDirection: "row",
        alignItems: "center",
    }, infocontainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 8,
    }
});
export default RepoCard;