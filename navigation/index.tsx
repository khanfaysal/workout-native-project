

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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Planner" component={PlannerScreen} />
        </Tab.Navigator>
    )
}