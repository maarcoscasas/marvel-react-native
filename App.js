import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import CharacterScreen from "./src/screens/Character";
import { Icon } from "@rneui/base";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "Marvel app",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          options={{
            tabBarIcon: () => <Icon name="sc-telegram" type="evilicon" color="#517fa4" />,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => <Icon name="sc-telegram" type="evilicon" color="#517fa4" />,
          }}
          name="Character"
          component={CharacterScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} */
