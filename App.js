import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/Home';
import Counter from './src/Screens/Counter';
import repos from './src/Screens/Repos';
import details from './src/Screens/details';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title: "Home",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }} />
      <Stack.Screen name="Counter" component={Counter} options={{
        title: "Counter",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }} />
      <Stack.Screen name="Day2" component={repos} options={{
        headerShown: false
      }} />
      <Stack.Screen name="details" component={details} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}