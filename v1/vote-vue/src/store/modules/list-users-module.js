import api from '@/services/api.js'

export const listUsersModule = {
  state: {
    list: 1,
    users: []
  },

  getters: {
    getList(state) {
      return state.list
    },

    getUsers(state) {
      return state.users
    }
  },

  mutations: {
    backList(state) {
      state.list--
    },

    nextList(state) {
      state.list++
    },

    users(state, { users }) {
      state.users = users
    }
  },

  actions: {
    actionListUsers({ commit, state }) {
      commit('backList')

      api
        .get(`/listUsers/${state.list}`)

        .then(response => {
          commit('users', { users: response })
        })

        .catch(e => console.error(e))
    }
  },

  namespaced: true
}
