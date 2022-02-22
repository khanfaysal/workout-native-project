import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {

    useEffect(() => {
        console.log('initial planscreen rendering');

        return () => console.log('unmounting planner screen')
    }, [])

    return (
        <View>
            <Text>Planner screen</Text>
            <Button
                title='Go Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
export default PlannerScreen;