import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, FlatList, Pressable, Alert } from 'react-native';
import data from '../data.json';
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
            <FlatList
                data={data as Workout[]}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate('WorkDetail', { slug: item.slug })}
                        >
                            <WorkoutItem item={item} />
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.slug}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontFamily: "montserrat-bold"
    }
})

export default HomeScreen;
