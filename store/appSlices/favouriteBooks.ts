import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Book from '../../types/book'

export interface FavouriteBooksSlice {
    favouriteBooks: Book[]
}

const initialState: FavouriteBooksSlice = {
    favouriteBooks: []
}

export const favouroteBooksSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addToFavourites(state, action: PayloadAction<Book>) {
            if (!state.favouriteBooks.find((b) => b.name === action.payload.name)) {
                state.favouriteBooks.push(action.payload);
            }
        },
        removeFromFavourites(state, actoin: PayloadAction<Book>) {
            state.favouriteBooks = state.favouriteBooks.filter((b) => b.id !== actoin.payload.id);
        },
        setFavourites(state, actoin: PayloadAction<Book[]>) {
            state.favouriteBooks = actoin.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites, setFavourites } = favouroteBooksSlice.actions

export default favouroteBooksSlice.reducer