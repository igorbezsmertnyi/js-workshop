import Questions from '@/questions.json'

export default {
  state: {
    total: Questions.list.length,
    currentQuestion: null,
    isStarted: false,
    answers: [ ...Array(Questions.list.length ).keys()].map(() => [])
  },

  getters: {
    currentQuestion: state => state.currentQuestion,
    questionsTotal: state => state.total,
    testStarted: state => state.isStarted,
    getAnswers: state => state.answers,
    optionsSelected: state => (
      state.answers[state.currentQuestion] ?
      Boolean(state.answers[state.currentQuestion].length) : false
    )
  },

  mutations: {
    RESET_RESULTS(state) {
      state.isStarted = false
      state.currentQuestion = 0
      state.answers = [ ...Array(Questions.list.length ).keys()].map(() => [])
    },
  
    START_TEST(state) {
      state.currentQuestion = 0
      state.isStarted = true

      localStorage.removeItem('testAnswers')
    },

    NEXT_QUESTION(state) {
      state.currentQuestion += 1
    },

    PREVIOUS_QUESTION(state) {
      state.currentQuestion -= 1
    },

    SET_ANSWER(state, data) {
      const id = state.answers[data.index].indexOf(data.id)
      if (id > 0) return

      state.answers[data.index].push(data.id)

      localStorage.setItem('testAnswers', JSON.stringify(state.answers))
    },

    REMOVE_ANSWER(state, data) {
      if (!state.answers[data.index]) return

      const id = state.answers[data.index].indexOf(data.id)
      if (id < 0) return

      state.answers[data.index].splice(id, 1)

      localStorage.setItem('testAnswers', JSON.stringify(state.answers))
    }
  },

  actions: {
    resetResults({ commit }) {
      commit('RESET_RESULTS')
    },

    startTest({ commit }) {
      commit('START_TEST')
    },

    nextQuestion({ commit }) {
      commit('NEXT_QUESTION')
    },

    previousQuestion({ commit }) {
      commit('PREVIOUS_QUESTION')
    },

    setAnswer({ commit }, data) {
      commit('SET_ANSWER', data)
    },

    removeAnswer({ commit }, data) {
      commit('REMOVE_ANSWER', data)
    }
  }
}