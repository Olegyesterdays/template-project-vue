import api from '@/services/api.js'
import router from "@/router"

export const userModule = {
    state: {
        theme: "",
        authToken: "",
        role: "",
        isMenu: "",

        email: "qwerty123@gmail.com",
        password: "123",
    },

    getters: {
        getTheme(state) {
            return state.theme
        },

        getAuthToken(state) {
            return state.authToken
        },

        getRole(state) {
            return state.role
        },

        getIsMenu(state) {
            return state.isMenu
        },

        getEmail(state) {
            return state.email
        },

        getPassword(state) {
            return state.password
        }
    },

    mutations: {
        changeTheme(state, { theme }) {
            state.theme = theme
        },

        changeAuthToken(state, { authToken }) {
            state.authToken = authToken
        },

        changeRole(state, { role }) {
            state.role = role
        },

        changeIsMenu(state, { isMenu }) {
            state.isMenu = isMenu
        },

        changeEmail(state, { email }) {
            state.email = email
        },

        changePassword(state, { password }) {
            state.password = password
        },

        clearEmailAndPassword(state) {
            state.email = ""
            state.password = ""
        },

        clearDataUser(state) {
            state.theme = "";
            state.authToken = "";
            state.role = "";
            state.email = ""
            state.password = ""
        },
    },

    actions: {
        switchIsMenu({ commit, getters }) {
            commit("changeIsMenu", { isMenu: !getters["getIsMenu"] })
        },

        closingMenu({ commit, getters }) {
            commit("changeIsMenu", { isMenu: false })
        },

        switchTheme({ commit, getters }) {
            commit("changeTheme", { theme: getters["getTheme"] === 'light' ? 'dark' : 'light'})
            localStorage.setItem('theme', getters["getTheme"]);
        },

        installingTheTheme({ getters }) {
            if (getters["getTheme"] === 'light') {
                document.documentElement.style.setProperty('--main-color', '#ffffff');
                document.documentElement.style.setProperty('--additional-color', '#1e1e1e');
                document.documentElement.style.setProperty('--accent-color', '#da4b1a');
                document.documentElement.style.setProperty('--text-color', '#1e1e1e');
                document.documentElement.style.setProperty('--additional-text-color', '#ffffff');
                document.documentElement.style.setProperty('--accent-text-color', '#da4b1a');
            } else if (getters["getTheme"] === 'dark') {
                document.documentElement.style.setProperty('--main-color', '#1e1e1e');
                document.documentElement.style.setProperty('--additional-color', '#ffffff');
                document.documentElement.style.setProperty('--accent-color', '#da4b1a');
                document.documentElement.style.setProperty('--text-color', '#ffffff');
                document.documentElement.style.setProperty('--additional-text-color', '#1e1e1e');
                document.documentElement.style.setProperty('--accent-text-color', '#da4b1a');
            }
        },
        fetch({ commit }) {
            commit("changeTheme", { theme: localStorage.getItem("theme")})
            commit("changeAuthToken", { authToken: localStorage.getItem("authToken")})
            commit("changeRole", { role: localStorage.getItem("role")})
        },

        update({ getters }) {
            localStorage.setItem("theme", getters.getTheme);
            localStorage.setItem("authToken", getters.getAuthToken);
            localStorage.setItem("role", getters.getRole);
        },

        login({ commit, getters }) {
            api
                .post(`/user/login`, {
                    email: getters.getEmail,
                    password: getters.getPassword,
                })

                .then(response => {
                    commit("changeTheme", { theme: response.data.theme })
                    commit("changeAuthToken", { theme: response.data.authToken })
                    commit("changeRole", { theme: response.data.role })

                    router.push({ path: "/user/account" })
                })

                .catch(error => console.log(error))
        },

        registration({ commit, getters }) {
            api
                .post(`/user/registration`, {
                    email: getters.getEmail,
                    password: getters.getPassword,
                })

                .then(response => {
                    commit("changeTheme", { theme: response.data.theme })
                    commit("changeAuthToken", { theme: response.data.authToken })
                    commit("changeRole", { theme: response.data.role })

                    router.push({ path: "/user/account" })
                })

                .catch(error => console.log(error))
        },
    },

    namespaced: true
}
