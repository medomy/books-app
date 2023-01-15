import { View, Text, Image } from 'react-native'
import React from 'react'
import Book from '../../types/book'
import styles from './styles'

interface props {
    book: Book
}
export default function BookCard({ book }: props) {
    return (
        <View style={styles.bookCardContainer}>
            <Image source={{ uri: book?.img }} style={styles.img} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{book?.name}</Text>
                <Text style={styles.authors}>{book.authors?.join(" , ")}</Text>
            </View>
        </View>
    )
}