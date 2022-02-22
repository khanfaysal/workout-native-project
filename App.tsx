import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </>
    );
}

export default App;