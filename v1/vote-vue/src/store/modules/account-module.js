import api from '@/services/api.js'

export const accountModule = {
  state: {
    voteType: 'NotPassed',

    // myVote ==========================================================================================================
    myVote: [],

    linkToMyNextVotes: "",

    // notPassed =======================================================================================================
    notPassed: [],

    linkToMyNextNotPassedVotes: "",

    // passed ==========================================================================================================
    passed: [],

    linkToMyNextPassedVotes: "",
  },

  getters: {
    getVoteType(state) { return state.voteType },

    // myVote ==========================================================================================================
    getMyVote(state) { return state.myVote },

    getLinkToMyNextVotes(state) { return state.linkToMyNextVotes },

    // notPassed =======================================================================================================
    getNotPassed(state) { return state.notPassed },

    getLinkToMyNextNotPassedVotes(state) { return state.linkToMyNextNotPassedVotes },

    // passed ==========================================================================================================
    getPassed(state) { return state.passed },

    getLinkToMyNextPassedVotes(state) { return state.linkToMyNextPassedVotes }
  },

  mutations: {
    voteTypeNotPassed(state) {
      state.voteType = 'NotPassed'
    },

    voteTypePassed(state) {
      state.voteType = 'Passed'
    },
    // myVote ==========================================================================================================
    listMyVote(state, { list }) {
      state.myVote = list
    },

    linkToMyNextVotes(state, { link }) {
      state.linkToMyNextVotes = link
    },

    addListMyVote(state, { list }){
      state.myVote = [...state.myVote, ...list]
    },

    // notPassed =======================================================================================================
    listNotPassed(state, { list }) {
      state.notPassed = list
    },

    linkToMyNextNotPassedVotes(state, { link }) {
      state.linkToMyNextNotPassedVotes = link
    },

    addListNotPassed(state, { list }) {
      state.notPassed = [...state.notPassed, ...list]
    },

    // passed ==========================================================================================================
    listPassed(state, { list }) {
      state.passed = list
    },

    linkToMyNextPassedVotes(state, { link }) {
      state.linkToMyNextPassedVotes = link
    },

    addListPassed(state, { list }) {
      state.passed = [...state.passed, ...list]
    },
  },

  actions: {
    // myVote ==========================================================================================================
    myCreated({ commit }) {
      api
        .get('/users/me/createdQuizzes')

        .then(response => {
          commit('listMyVote', { list: response.data.createdQuizzes })
          commit("linkToMyNextVotes", { link: response.data.pagination.next_page })
        })

        .catch(e => console.error(e))
    },

    addMyCreated({ commit, getters }) {
      if (getters["getLinkToMyNextVotes"] !== "") {
        api
          .get(getters["getLinkToMyNextVotes"])

          .then(response => {
            commit("addListMyVote", { list: response.data.createdQuizzes })
            commit("linkToMyNextVotes", { link: response.data.pagination.next_page })
          })

          .catch(e => console.error(e))
      }
    },

    // notPassed =======================================================================================================
    onlyNotCompleted({ commit }) {
      api
        .get('/users/me/attachedQuizzes?onlyNotCompleted=true')

        .then(response => {
          commit('listNotPassed', { list: response.data.attachedQuizzes })
          commit("linkToMyNextNotPassedVotes", { link: response.data.pagination.next_page })
        })

        .catch(e => console.error(e))
    },

    addOnlyNotCompleted({ commit, getters }) {
      if (getters["getLinkToMyNextNotPassedVotes"] !== "") {
        api
          .get(getters["getLinkToMyNextNotPassedVotes"])

          .then(response => {
            commit("addListNotPassed", { list: response.data.attachedQuizzes })
            commit("linkToMyNextNotPassedVotes", { link: response.data.pagination.next_page })
          })

          .catch(e => console.error(e))
      }
    },

    // passed ==========================================================================================================
    onlyCompleted({ commit }) {
      api
        .get('/users/me/attachedQuizzes?onlyCompleted=true')

        .then(response => {
          commit('listPassed', { list: response.data.attachedQuizzes })
          commit("linkToMyNextPassedVotes", { link: response.data.pagination.next_page })
        })

        .catch(e => console.error(e))
    },

    addOnlyCompleted({ commit, getters }) {
      if (getters["getLinkToMyNextPassedVotes"] !== "") {
        api
          .get(getters["getLinkToMyNextPassedVotes"])

          .then(response => {
            commit("addListPassed", { list: response.data.attachedQuizzes })
            commit("linkToMyNextPassedVotes", { link: response.data.pagination.next_page })
          })

          .catch(e => console.error(e))
      }
    },
  },

  namespaced: true
}
