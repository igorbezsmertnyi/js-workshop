<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>6.3 Boolean</h1>
    </div>

    <div class="tutorial__body">
      <p>
        The Logical data type in JS is represented by two values - <code>true</code> and <code>false</code>. The language
        can automatically transform different values to the boolean type. So false in addition to the 
        logical value false is <code>null</code>, <code>undefined</code>, <code>''</code>(empty string), <code>0</code>
        and <code>NaN</code>. The other values including any others object are the true value. During logical operation
        execution, everything that is true transform to <code>true</code> and everything that is false transform 
        to <code>false</code>. In according to the above principles the empty string will be transformed to <code>false</code>
        and in a result of following code execution the console receives a string <code>This is false</code>
      </p>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/eac2f66bf0c0360a8091893cb550e6d8
      </VEmbed>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'BooleanPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [
      'eac2f66bf0c0360a8091893cb550e6d8'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
