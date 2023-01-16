import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFavouritesAsyncStorage, setToAsyncStorage } from "../hooks/useCachedAsyncStorage";
import Book from "../types/book";

export async function addTofavouritesAsyncStorage(book: Book) {
    try {
        let books = await getFavouritesAsyncStorage();
        if (books) {
            books.push(book);
            await setToAsyncStorage(books);
        }
        else {
            await AsyncStorage.setItem("favouriteBooks", JSON.stringify([book]));
        }
    } catch (err) {
        throw new Error(`error adding async , ${err}`)
    }
}

export async function removeFromFavouritesAsyncStorage(book: Book) {
    try {
        const _books = await getFavouritesAsyncStorage();
        const books = _books.filter((b: Book) => b.id !== book.id);
        await AsyncStorage.setItem("favouriteBooks", JSON.stringify(books));
    } catch (err) {
        throw new Error(`error adding async , ${err}`)
    }
}