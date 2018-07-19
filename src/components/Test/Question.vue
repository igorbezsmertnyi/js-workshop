<template>
  <div 
    class="test-cards"
    :style="{
      'transform': `translateX(-${796 * currentQuestion}px)`
    }"
  >
    <el-card class="box-card test-cards__card" v-for="(item, index) in questions" :key="`question${index}`">
      <div slot="header" class="clearfix test-cards__card__header">
        <span v-html="item.title" />
        <small v-html="item.description" />
      </div>

      <div 
        class="test-cards__card__body text item"
        :data-question="index"
        :data-options="item.options.length"
      >
        <el-checkbox 
          v-for="(option, optIndex) in item.options" 
          :key="`opt${option}_${index}`"
          :id="`opt${index}_${optIndex}`"
        >
          <span v-html="option" />
        </el-checkbox>
      </div>
    </el-card>
  </div>
</template>

<script>
import Questions from '@/questions.json'

export default {
  name: 'Question',
  data: () => ({
    questions: Questions.list
  }),

  computed: {
    currentQuestion() {
      return this.$store.getters.currentQuestion
    }
  }
}
</script>

<style lang="stylus">
@import '../../styles'

.test-cards
  display flex
  transition transform ease-in .3s

  &__card
    min-width 768px
    height fit-content
    margin-right 26px

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
      flex-direction column
</style>
