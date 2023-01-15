import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'

interface props {
    getSearchVal: (val: string) => void;
}
export default function SearchForm({ getSearchVal }: props) {
    const [searchVal, setSearchVal] = useState<string>("");
    const setVal = (val: string) => {
        setSearchVal(val);
        console.log(val);
    }
    return (
        <View style={styles.formContainer}>
            <TextInput
                placeholder='search by title or author...'
                style={styles.input}
                value={searchVal}
                onChangeText={setVal}
            />
            <Pressable style={styles.searchBtn} onPress={() => getSearchVal(searchVal)}>
                <FontAwesome name="search" size={24} color="white" />
            </Pressable>
        </View>
    )
}