<template>
  <div class="test">
    <el-progress v-if="isStarted" :percentage="score" :show-text="false"></el-progress>

    <div 
      class="test__welcome"
      :class="{
        'test__welcome--disactive': isStarted
      }"
    >
      <h3>Welcome to the knowledge test</h3>
      <p>Here you able to check your knowledge received in this course</p>

      <el-button type="primary" class="test__btn" @click="startTest()">Let's go</el-button>
    </div>

    <div 
      class="test__wrap"
      :class="{
        'test__wrap--active': isStarted
      }"
    >
      <test />
    </div>
  </div>
</template>

<script>
import Test from '@/components/Test'

export default {
  name: 'KnowledgeTest',
  components: {
    Test
  },

  methods: {
    startTest() {
      this.$store.dispatch('startTest')
    }
  },

  computed: {
    isStarted() {
      return this.$store.getters.testStarted
    },

    score() {
      const count = [ ...this.$store.getters.getAnswers.filter(a => a.length) ].length
      const total = this.$store.getters.questionsTotal

      return (count / total) * 100
    }
  }
}
</script>

<style lang="stylus">
@import '../styles'

.test
  &__welcome
    display flex
    justify-content center
    align-items center
    flex-direction column
    transform translateY(0)
    transition transform ease-in .3s

    &--disactive
      transform translateY(-1000%)

    h3
    p
      text-align center

    h3
      font-size $font-subtitle
      color $green
      font-weight 200
      margin-top 0

    p
     font-size $font-text
     max-width 360px
  
  &__btn
    margin-top 144px
    padding 18px 84.3px
    box-shadow 4px 3px 20px 1px rgba(136, 136, 136, 0.27)

  &__wrap
    opacity 0
    transform translateY(100%)
    transition transform ease-in .3s

    &--active
      opacity 1
      transform translateY(-320px)
</style>
