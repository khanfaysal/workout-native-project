import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {

    useEffect(() => {
        console.log("initial homescreen rendering");
    }, [])
    return (
        <View>
            <Text>Home screen</Text>
            <Button
                title='Go Plan'
                onPress={() => navigation.navigate('Planner')}
            />
        </View>
    )
}
export default HomeScreen;