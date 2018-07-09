<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>6.3 Boolean</h1>
    </div>

    <div class="tutorial__body">
      <p>
        <mark>Booleans</mark> are values that can be only one of two things: true or false. Anything “on” or “off,” 
        “yes” or “no,” or temporary is a usually good fit for a boolean. It’s useful to store booleans in variables 
        to keep track of their values and change them over time.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/ecea9c6a751f266aa0225e26887c1bc4
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
      'ecea9c6a751f266aa0225e26887c1bc4'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
