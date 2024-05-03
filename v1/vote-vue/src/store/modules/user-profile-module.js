import api from '@/services/api.js'

export const userProfileModule = {
  state: {
      name: '',
      surname: '',
      patronymic: '',
      placeOfWork: '',
      role: '',
      post: ''
  },

  getters: {
    getNameUser(state) {
      return state.name
    },

    getSurnameUser(state) {
      return state.surname
    },

    getPatronymicUser(state) {
      return state.patronymic
    },

    getPlaceOfWorkUser(state) {
      return state.placeOfWork
    },

    getRoleUser(state) {
      return state.role
    },

    getPostUser(state) {
      return state.post
    }
  },

  mutations: {
    editName(state, { name }) {
      state.name = name
    },

    editSurname(state, { surname }) {
      state.surname = surname
    },

    editPatronymic(state, { patronymic }) {
      state.patronymic = patronymic
    },

    editPlaceOfWork(state, { placeOfWork }) {
      state.placeOfWork = placeOfWork
    },

    editRole(state, { role }) {
      state.role = role
    },

    editPost(state, { post }) {
      state.post = post
    }
  },

  action: {
    userInformation({ commit }) {
      api
        .get('/profileUserInformation')

        .then(response => {
          commit('editName', { name: response.data.name })
          commit('editSurname', { surname: response.data.surname })
          commit('editPatronymic', { patronymic: response.data.patronymic })
          commit('editPlaceOfWork', { placeOfWork: response.data.placeOfWork })
          commit('editRole', { role: response.data.role })
          commit('editPost', { post: response.data.post })
        })

        .catch(e => console.error(e))
    },

    saveChanges({ state, getters }) {
      api
        .post('/profileSaveChanges', {
          name: getters["getNameUser"],
          surname: getters["getSurnameUser"],
          patronymic: getters["getPatronymicUser"],
          placeOfWork: getters["getPlaceOfWorkUser"],
          role: getters["getRoleUser"],
          post: getters["getPostUser"],
        })

        .then(response => {

        })

        .catch(e => console.error(e))
    }
  },

  namespaced: true
}
