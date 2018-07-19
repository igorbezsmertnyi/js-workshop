<template>
  <div class="text-cards__list">
    <question />

    <div class="text-cards__button">
      <el-button v-if="currentQuestion !== 0" round @click="previousQuestion()">Back</el-button>
      <el-button
        round
        type="primary"
        v-if="currentQuestion < questionsTotal - 1" 
        @click="nextQuestion()"
        :disabled="!optionsSelected"
      >
        Next
      </el-button>

      <el-button 
        v-if="currentQuestion == questionsTotal - 1" 
        :disabled="!optionsSelected"
        @click="showResult()"
        type="success" 
        round
      >
        Check Result
      </el-button>
    </div>
  </div>
</template>

<script>
import Question from './Question'

export default {
  name: 'Test',
  components: {
    Question
  },

  watch: {
    currentQuestion(newIndex, _) {
      this.selected(newIndex)
    }
  },

  methods: {
    selected(index) {
      const element = document.querySelector(`[data-question="${index}"]`)
      const optionsCount = Number(element.dataset.options)
      const options = [ ...Array(optionsCount).keys() ].map(i => document.getElementById(`opt${index}_${i}`))

      options.forEach((option, i) => {
        option.addEventListener('change', e => {
          if (e.target.checked) {
            this.setAnswer(index, i)
          } else {
            this.removeAnswer(index, i)
          }
        })
      })
    },

    nextQuestion() {
      this.$store.dispatch('nextQuestion')
    },

    previousQuestion() {
      this.$store.dispatch('previousQuestion')
    },

    setAnswer(index, id) {
      this.$store.dispatch('setAnswer', { id: id, index: index })
    },

    removeAnswer(index, id) {
      this.$store.dispatch('removeAnswer', { id: id, index: index })
    },

    showResult() {
      this.$router.push({ path: '/knowledge-test/results' })
    }
  },

  computed: {
    currentQuestion() {
      return this.$store.getters.currentQuestion
    },

    questionsTotal() {
      return this.$store.getters.questionsTotal
    },

    answers() {
      return this.$store.getters.getAnswers
    },

    optionsSelected() {
      return this.$store.getters.optionsSelected
    }
  }
}
</script>

<style lang="stylus">
@import '../../styles'

.text-cards
  &__button
    margin-top 24px
</style>