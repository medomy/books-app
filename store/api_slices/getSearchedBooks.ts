import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from '../../network/config';
export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://sharon.stepzen.net/api/eponymous-grizzly/__graphql" }),
    endpoints: (builder) => ({
        getBooksBySearch: builder.query<any, string>({
            query: (name) => ({
                url: "",
                method: "POST",
                headers: {
                    "Authorization": `APIKey ${Config.api_key}`
                },
                body: {
                    operationName: "SearchBooks",
                    query: `query SearchBooks($q: String) {
                        googleBooksSearch(q:$q, country: "US") {
                          items {
                            id
                            volumeInfo {
                              authors
                              averageRating
                              description
                              imageLinks {
                                thumbnail
                              }
                              title
                              subtitle
                              industryIdentifiers {
                                identifier
                                type
                              }
                            }
                          }
                        }
                        openLibrarySearch(q: $q) {
                          docs {
                            author_name
                            title
                            cover_edition_key
                            isbn
                          }
                        }
                      }`,
                    variables: {
                        q: name
                    }
                }
            })
        })
    })
})

export const { useGetBooksBySearchQuery } = booksApi;