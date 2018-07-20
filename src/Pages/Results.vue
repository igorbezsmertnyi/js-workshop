<template>
  <div class="results">
    <div class="results__header">
      <h3>
        Congratulations!!!
      </h3>
      <p>
        You correctly answered to {{ Number(score.toFixed(2)) }}% questions
      </p>
    </div>
  
    <el-card class="box-card results__card" v-for="(item, index) in questions" :key="`answer${index}`">
      <div slot="header" class="clearfix results__card__header">
        <span v-html="item.title" />
        <small v-html="item.description" />
      </div>

      <div class="results__card__body">
        <div class="results__card__col">
          <span>Correct answer:</span>
          <p 
            v-for="(correctIndex, i) in item.answerIndex" 
            v-html="item.options[correctIndex]"
            :key="`correctOption${i}`"
          />
        </div>

        <div class="results__card__col">
          <span>Your answer:</span>
          <p
            v-for="(yourIndex, j) in answers[index]" 
            v-html="item.options[yourIndex]"
            :key="`yourOption${j}`"
            :class="{
              'results__card__answ--correct': isCorrectAnswer(j, index),
              'results__card__answ--wrong': !isCorrectAnswer(j, index)
            }"
          />
        </div>
      </div>
    </el-card>

    <div class="results__get-certificate">
      <router-link to="/knowledge-test/certificate">
        <el-button type="success" round>Get Certificate</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Questions from '@/questions.json'

export default {
  name: 'Results',
  data: () => ({
    answers: [],
    questions: Questions.list,
    score: 0
  }),

  beforeMount() {
    this.answers = JSON.parse(localStorage.getItem('testAnswers')) || []

    if (!this.answers.length) this.$router.push({ path: '/' })

    this.correctAnswers()
  },

  methods: {
    correctAnswers() {
      const answersIndeces = this.questions.map(q => q.answerIndex)

      for (let i = 0; i < answersIndeces.length; i++) {
        let tmpScore = 0
        let pattern = answersIndeces[i]
        let checkAnswer = this.answers[i]
        let maxPoint = pattern.length > pattern.length ? pattern.length : checkAnswer.length

        for (let j = 0; j < maxPoint; j++) {
          if (pattern[j] === checkAnswer[j]) {
            tmpScore += (100 / answersIndeces.length) / pattern.length
          }
        }

        this.score +=  tmpScore
      }
    },

    isCorrectAnswer(row, index) {
      const itemAnswers = this.questions[index].answerIndex
      const yourAnswers = this.answers[index]

      return itemAnswers[row] == yourAnswers[row]
    }
  }
}
</script>

<style lang="stylus">
@import '../styles'

.results
  &__header
    margin-bottom 20px

    h3
      font-size $font-title
      font-weight 200
      color $green
      margin 0 0 15px
    
    p
      font-size $font-subtitle
      margin 0 0 40px

  &__card
    margin-bottom 40px

    &__header
      display flex
      flex-direction column

      span
        font-size $font-text

      small
        color #909399
        font-size $font-default
        margin-top 10px

    &__body
      display flex
      flex-direction row

    &__col
      width calc(50% - 30px)
      padding 5px 15px

      span
        color $gray
      
      p
        font-weight 500

    &__answ
      &--correct
        color $green
      
      &--wrong
        color $red

  &__get-certificate
    display flex
    justify-content center
    align-items center
    padding 40px 20px
</style>
