import api from '@/services/api.js'
import router from "@/router"

export const booksModule = {
    state: {
        theBookBeingViewed: 0,
        booksList: [
            {
                title: "title_1",
                author: "author_1",
                genres: [
                    {
                        genre: "genre_11",
                        id: 0
                    },
                    {
                        genre: "genre_21",
                        id: 0
                    },
                    {
                        genre: "genre_31",
                        id: 0
                    },
                    {
                        genre: "genre_41",
                        id: 0
                    },
                    {
                        genre: "genre_51",
                        id: 0
                    }
                ]
            },
            {
                title: "title_2",
                author: "author_2",
                genres: [
                    {
                        genre: "genre_12",
                        id: 0
                    },
                    {
                        genre: "genre_22",
                        id: 0
                    },
                    {
                        genre: "genre_32",
                        id: 0
                    },
                    {
                        genre: "genre_42",
                        id: 0
                    },
                    {
                        genre: "genre_52",
                        id: 0
                    }
                ]
            },
            {
                title: "title_3",
                author: "author_3",
                genres: [
                    {
                        genre: "genre_13",
                        id: 0
                    },
                    {
                        genre: "genre_23",
                        id: 0
                    },
                    {
                        genre: "genre_33",
                        id: 0
                    },
                    {
                        genre: "genre_43",
                        id: 0
                    },
                    {
                        genre: "genre_53",
                        id: 0
                    }
                ]
            },
        ]
    },

    getters: {
        getBooksList(state) {
            return state.booksList
        },

        getTitle(state) {
            return state.booksList[state.theBookBeingViewed].title
        },

        getAuthor(state) {
            return state.booksList[state.theBookBeingViewed].author
        },

        getGenres(state) {
            return state.booksList[state.theBookBeingViewed].genres
        },

        getTheBookBeingViewed(state) {
            return state.theBookBeingViewed
        },
    },

    mutations: {
        booksList(state, { booksList }) {
            state.booksList = booksList
        },

        theBookBeingViewed(state, { theBookBeingViewed }) {
            state.theBookBeingViewed = theBookBeingViewed
        }
    },

    actions: {
        booksList({ commit }) {
            api
                .get(`/api/books`, )

                .then(response => {
                    commit("booksList", { booksList: response.data.booksList })
                })

                .catch(error => console.log(error))
        }
    },

    namespaced: true
}
