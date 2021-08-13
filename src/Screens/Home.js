import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    Linking,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonScreen from '../components/Button';
const HomeScreeen = ({ navigation }) => {
    return <LinearGradient colors={['#6D6027', "#D3CBB8"]} style={styles.container}>
        <ButtonScreen title='Day 1'
            onPress={() => navigation.navigate('Counter')} />
        <ButtonScreen title='Day 2'
            onPress={() => navigation.navigate('Day2')} />
        <View style={styles.contact}>
            <Text style={{ fontSize: 18 }} >Contact Me :</Text>
            <Pressable onPress={() => Linking.openURL("https://www.facebook.com/fouadmagdy1911")}
                style={styles.facebook} >
                <MaterialCommunityIcons name="facebook" size={30} color="black" k />
                <Text style={styles.text}>Fouad Magdy</Text>
            </Pressable>
            <Pressable onPress={() => Linking.openURL("https://github.com/FouadMagdy01")}
                style={styles.facebook} >
                <MaterialCommunityIcons name="github" size={30} color="black" k />
                <Text style={styles.github}>FouadMagdy01</Text>
            </Pressable>
        </View>
    </LinearGradient>
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    facebook: {
        flexDirection: "row",
        paddingTop: 10
    },
    text: {
        marginLeft: 10,
        color: "#4863A0",
        fontSize: 18
    },
    github: {
        marginLeft: 10,
        color: "white",
        fontSize: 18
    },
    contact: {
        position: "absolute",
        bottom: 0,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default HomeScreeen
