<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>8. Array</h1>
    </div>

    <div class="tutorial__body">
      <p>
        <mark>Arrays</mark> in JavaScript has implemented like <mark>objects</mark>. In result talking about
        an array, actually, we talking about objects that are similar to arrays. Elements in array are accessed
        by using their <mark>indices</mark>. Numeriacal indexes are <mark>converted to string</mark> and 
        used as names for retrieving values. For example <code>arr[0]</code> give the same value as 
        <code>arr['0']</code>: <code>arr[0] === arr['0']</code>.
      </p>

      <p>
        According to describe above the simple array can be declared by command <code>let arr = ['A', 'B', 'C']</code>
      </p>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/a43ce7dfc194829fa11397df3800e1b0
      </VEmbed>

      <p>
        For deleting an element from the array, we can't use <code>delete</code> operator because it leaves 
        in an array <code>empty</code> instead of value, but we can use <code>splice()</code>.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/ed928db9fcf00b3c9978c207de178a65
      </VEmbed>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'ArrayPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [
      'a43ce7dfc194829fa11397df3800e1b0',
      'ed928db9fcf00b3c9978c207de178a65'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
