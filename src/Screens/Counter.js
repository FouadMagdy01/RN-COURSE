import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ButtonScreen from '../components/Button';
import { LinearGradient } from 'expo-linear-gradient';
const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return <LinearGradient colors={['#6D6027', "#D3CBB8"]} style={styles.Container} >
        <View style={styles.view}>
            <ButtonScreen
                title='+'
                onPress={() => { setCounter(counter + 1) }}
            />
            <Text style={styles.textStyle} > Counter Value :  {counter}</Text>
            <ButtonScreen
                title='-'
                onPress={() => { setCounter(counter - 1) }}
            />
        </View>
    </LinearGradient>
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 2,
    }
});
export default CounterScreen;
