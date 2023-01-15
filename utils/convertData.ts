import Book from "../types/book";

export function convertGoogle(data: any): Book[] {
    return data.googleBooksSearch.items.map((item: any) => {
        return {
            id: item.id,
            authors: item.volumeInfo.authors,
            img: item.volumeInfo.imageLinks.thumbnail,
            name: item.volumeInfo.title
        }
    })
}

export function convertOpenLibrary(data: any): Book[] {
    return data.openLibrarySearch.docs.map((item: any) => {
        return {
            id: item.cover_edition_key,
            authors: item.author_name,
            img: `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`,
            name: item.title
        }
    })
}