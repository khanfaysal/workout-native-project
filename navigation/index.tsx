import React from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';

// stack navigator
const Stack = createNativeStackNavigator();
// navigator components
const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}
export default Navigation;

// root navigator function
const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Root'
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
// bottom navigator 
const Tab = createBottomTabNavigator();
// bottom tab navigator
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='home' size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Planner"
                component={PlannerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name='add-to-list' size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}