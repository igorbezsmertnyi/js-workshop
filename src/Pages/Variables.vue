<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>7. Variables</h1>
    </div>

    <div class="tutorial__body">
      <p>
        In JavaScript, variables can be defined by using keyword <mark>var</mark>,
        <mark>let</mark> or <mark>const</mark>.
      </p>

      <p>
        When you use keyword <code>var</code> you can define the variable, and if you want to
        initialize it with some value. If variable didn't initialize its value will be equal
        <mark>undefined</mark>. Variables declared with <code>var</code> have a <mark>function scope</mark>.
      </p>

      <p>
        Keyword <code>let</code> the same as <code>var</code> but it has a <mark>block scope</mark>.
      </p>

      <p>
        A variable declared using <code>const</code> keyword <mark>connot be reassigned</mark>.
        But value, however, can be mutable. The const declaration has a <mark>block scope</mark>.
      </p>

      <p>
        The scope of a variable declared outside any function is <mark>global</mark>.
      </p>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'VariablesPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: []
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
