import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

interface props {
    transferLibrary: (library: "google" | "open") => void;
}
export default function TabsContainer({ transferLibrary }: props) {
    const [chosenLibrary, setChosenLibrary] = useState<"google" | "open">("google");
    const setGoogle = () => {
        setChosenLibrary("google");
        transferLibrary("google")
    }

    const setOpen = () => {
        setChosenLibrary("open");
        transferLibrary("open")
    }
    return (
        <View style={styles.tabsContainer}>
            <Pressable style={chosenLibrary === "google" ? styles.activeTab : styles.inActiveTab} onPress={setGoogle}>
                <Text style={chosenLibrary === "google" ? styles.activeTxt : styles.inActiveTxt} onPress={setGoogle}>Google Books</Text>
            </Pressable>
            <Pressable style={chosenLibrary === "open" ? styles.activeTab : styles.inActiveTab} onPress={setOpen}>
                <Text style={chosenLibrary === "open" ? styles.activeTxt : styles.inActiveTxt}>Open Library</Text>
            </Pressable>
        </View>
    )
}