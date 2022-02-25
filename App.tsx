import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import useCachedResources from './hooks/useCachedResources';

const App = () => {
    const isLoaded = useCachedResources();
    console.log(isLoaded);

    if (isLoaded) {
        return (
            <>
                <StatusBar style="auto" />
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </>
        );
    } else {
        return null
    }


}

export default App;