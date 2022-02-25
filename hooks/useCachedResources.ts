import { useEffect, useState } from "react";
import * as Font from 'expo-font';

const useCachedResources = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {

        async function loadResourcesAndDataAsync() {
            try {
                await Font.loadAsync({
                    // Montserrat: require("../assets/fonts/Montserrat-Bold.ttf"),
                    "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),

                })

            } catch (err) {
                console.warn(err)
            } finally {
                setIsLoadingComplete(true)
            }

        }
        loadResourcesAndDataAsync();
    }, [])

    return isLoadingComplete;

}
export default useCachedResources;