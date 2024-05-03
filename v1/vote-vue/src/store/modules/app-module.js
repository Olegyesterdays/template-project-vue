export const appModule = {
    state: {
        isMenu: false
    },

    getters: {
        getIsMenu(state) {
            return state.isMenu
        }
    },

    mutations: {
        switchIsMenu(state, { condition }) {
            state.isMenu = condition
        }
    },

    namespaced: true
}
