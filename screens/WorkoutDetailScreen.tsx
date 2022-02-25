import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';

type DetailParams = {
    route: {
        params: {
            slug: string
        }
    }
}

type Navigation = NativeStackHeaderProps & DetailParams;
const WorkOutDetailScreen = ({ route }: Navigation) => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Slug - {route.params.slug}</Text>
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

export default WorkOutDetailScreen;
