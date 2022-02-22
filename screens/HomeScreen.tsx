import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import data from '../data.json';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
    const renderItem = ({ item }: { item: any }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.difficulty}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.slug}
            />
            {/* <Button
                title='Go Plan'
                onPress={() => navigation.navigate('Planner')}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default HomeScreen;
