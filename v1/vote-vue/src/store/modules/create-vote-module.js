import api from '@/services/api.js'
import router from '@/router/index.js'

export const createVoteModule = {
  state: {
    quiz_id: 0,

    creatingOrParticipants: 'creating',

    editingAQuestion: false,

    title: '',

    description: '',

    attachedUsers: ['88103da6-6a07-43d0-95fb-62e3ff35dd75'],

    listUsers: [
      {
        name: 'name 1'
      },
      {
        name: 'name 2'
      },
      {
        name: 'name 3'
      },
      {
        name: 'name 4'
      },
      {
        name: 'name 5'
      },
      {
        name: 'name 6'
      },
      {
        name: 'name 7'
      },
      {
        name: 'name 8'
      },
      {
        name: 'name 9'
      },
      {
        name: 'name 10'
      }
    ],

    questions: [
      {
        titleQuestion: '',
        typeQuestion: '',
        options: [
          {
            text: ''
          }
        ]
      }
    ]
  },

  getters: {
    getEditingAQuestion(state) {
      return state.editingAQuestion
    },

    getQuestions(state) {
      return state.questions
    },

    getCreatingOrParticipants(state) {
      return state.creatingOrParticipants
    },

    getListUsers(state) {
      return state.listUsers
    },

    getTypeAnswers(state, { indexQuestion }) {
      return state.questions[indexQuestion].typeQuestion
    }
  },

  mutations: {
    clickOnTheQuestionCard(state) {
      state.editingAQuestion = true
    },

    clickNotOnTheQuestionCard(state) {
      state.editingAQuestion = false
    },

    creatingOrParticipants(state) {
      state.creatingOrParticipants = state.creatingOrParticipants === 'creating' ? 'participants' : 'creating'
    },

    deleteUser(state, { index }) {
      state.listUsers.splice(index, 1)
    },

    addTitle(state, { title }) {
      state.title = title
    },

    addDescription(state, { description }) {
      state.description = description
    },

    // ================================================

    recordTitleQuestion(state, { titleQuestion, indexQuestion }) {
      state.questions[indexQuestion].titleQuestion = titleQuestion
    },

    recordTheAnswer(state, { answer, indexQuestion, indexAnswer }) {
      state.questions[indexQuestion].options[indexAnswer].text = answer
    },

    typeQuestion(state, { type, indexQuestion }) {
      state.questions[indexQuestion].typeQuestion = type
    },

    newQuestion(state) {
      state.questions.push({
        titleQuestion: '',
        typeQuestion: '',
        options: [
          {
            text: ''
          }
        ]
      })
    },

    newAnswer(state, { indexQuestion }) {
      state.questions[indexQuestion].options.push({
        text: ''
      })
    },

    deleteQuestion(state, { indexQuestion }) {
      state.questions.splice(indexQuestion, 1)
    },

    deleteAnswer(state, { indexQuestion, indexAnswer }) {
      state.questions[indexQuestion].options.splice(indexAnswer, 1)
    },

    clear(state) {
      state.title = ''
      state.description = ''
      state.questions = [
        {
          titleQuestion: '',
          typeQuestion: '',
          options: [
            {
              text: ''
            }
          ]
        }
      ]
    },

    quiz_id(state, { quiz_id }) {
      state.quiz_id = quiz_id
    }
  },

  actions: {
    createVote({ commit, state }) {
      api
        .post('/quizzes', {
          title: state.title,
          description: state.description,
          questions: state.questions,
          attachedUsers: state.attachedUsers
        })

        .then(response => {
          commit('clear')

          router.push('/account')
        })

        .catch(e => console.error(e))
    },

    createAndPublishVote({ commit, state }) {
      api
        .post('/quizzes?publish=true', {
          title: state.title,
          description: state.description,
          questions: state.questions,
          attachedUsers: state.attachedUsers
        })

        .then(response => {
          commit('clear')

          router.push('/account')
        })

        .catch(e => console.error(e))
    },
  },

  namespaced: true
}
