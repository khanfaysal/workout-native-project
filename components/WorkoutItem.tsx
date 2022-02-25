import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Workout } from '../types/data';
import formatSec from '../utils/time';

const WorkoutItem = ({ item }: { item: Workout }) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.name}>Name: {item.name}
            </Text>
            <Text
                style={styles.duration}>Duration: {formatSec(item.duration)}
            </Text>
            <Text
                style={styles.difficulty}>Difficulty: {item.difficulty}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    duration: {
        fontSize: 15
    },
    difficulty: {
        fontSize: 15
    }
})
export default WorkoutItem;