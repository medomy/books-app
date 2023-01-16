import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Book from '../types/book';
import { useDispatch } from 'react-redux';
import { setFavourites } from '../store/appSlices/favouriteBooks';

export async function setToAsyncStorage(data: Book[]) {
    await AsyncStorage.setItem("favouriteBooks", JSON.stringify(data))
}
export async function getFavouritesAsyncStorage() {
    try {
        const booksString: string | null = await AsyncStorage.getItem("favouriteBooks");
        if (booksString) return JSON.parse(booksString);
        return null;
    } catch (err) {
        throw new Error(`could not get favourites from async storage , ${err}`)
    }
}
export default function useCachedAsyncStorage() {
    const dispatch = useDispatch();
    async function getData() {
        try {
            const data = await getFavouritesAsyncStorage();
            if (data) dispatch(setFavourites(data));
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getData();
    }, [])
}