import Api from "@/services/api.js";
import { createStore } from 'vuex';
import api from "@/services/api.js";

const store = createStore({
    state: {
        theme: "",
        votes: [],
        newVotesLink: ""
    },

    getters: {
        getTheme(state) {
            return state.theme
        },

        getVotes(state) {
            return state.votes
        },

        getNewVotesLink(state) {
            return state.newVotesLink
        }
    },

    mutations: {
        switchTheme(state) {
            state.theme = state.theme === "light-theme" ? "dark-theme" : "light-theme"
        },

        setTheme(state, { theme }) {
            state.theme = theme
        },

        votes(state, { votes }) {
            state.votes = votes
        },

        addNewVotes(state, { votes }) {
            state.votes = [...state.votes, ...votes]
        },

        writeALink(state, { link }) {
            state.newVotesLink = link
        }
    },

    actions: {
        theVotesICreated({ commit, getters }) {
            api
                .get(`users/me/createdQuizzes`)

                .then(response => {
                    // console.log(response.data.createdQuizzes)
                    commit("votes", { votes: response.data.createdQuizzes })
                    commit("writeALink", { link: response.data.pagination.next_page})
                })

                .catch(e => console.error(e))
        },

        addTheVotesICreated({ commit, getters }) {
            api
                .get(getters["getNewVotesLink"])

                .then(response => {
                    commit("addNewVotes", { votes: response.data.createdQuizzes })
                    commit("writeALink", { link: response.data.pagination.next_page})
                })

                .catch(e => console.error(e))
        },

        myVotes({ getters }) {
            console.log(getters["getVotes"])
        }
    }
});

export default store;
