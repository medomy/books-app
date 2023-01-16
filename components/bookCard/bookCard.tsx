import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Book from '../../types/book'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../../store/appSlices/favouriteBooks'
import { RootState } from '../../store/store'
import { addTofavouritesAsyncStorage, removeFromFavouritesAsyncStorage } from '../../services/asyncStorageFavourites'

interface props {
    book: Book
}
export default function BookCard({ book }: props) {
    const favouriteBooks = useSelector((state: RootState) => state.favourites.favouriteBooks);
    const dispatch = useDispatch();
    const addToFavs = async () => {
        dispatch(addToFavourites(book));
        await addTofavouritesAsyncStorage(book);
    };
    const removeFromFavs = async () => {
        dispatch(removeFromFavourites(book));
        await removeFromFavouritesAsyncStorage(book);
    };
    return (
        <View style={styles.bookCardContainer}>
            <Image source={{ uri: book?.img }} style={styles.img} />
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.title}>{book?.name}</Text>
                    <Text style={styles.authors}>{book.authors?.join(" , ")}</Text>
                </View>
                <Pressable
                    style={favouriteBooks.find((b) => b.id === book.id) ? styles.removeFromFavsBtn : styles.activeAddToFavsBtn}
                    onPress={favouriteBooks.find((b) => b.id === book.id) ? removeFromFavs : addToFavs}>
                    {favouriteBooks.find((b) => b.id === book.id) ? <Text style={styles.addToFavsTxt}>remove from favourites</Text> :
                        <Text style={styles.addToFavsTxt}>Add to favourites</Text>}
                </Pressable>
            </View>
        </View>
    )
}