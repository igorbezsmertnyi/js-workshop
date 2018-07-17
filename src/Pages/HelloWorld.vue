<template>
  <div class="tutorial">
    <div class="tutorial__title">
      <h1>5. Hello World</h1>
    </div>

    <div class="tutorial__body">
      <p>
        In this lesson, we will create a simple script and watch how it works.
      </p>

      <VEmbed class="tutorial__gist" :id="gist" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/ee44b438360346b023b2c9c767e4446d
      </VEmbed>

      <strong>Programs in JavaScript can be embedded everywhere in script tag</strong>

      <br/>

      <p>
        In this example we used 
        <code>&lt;script&gt; ... &lt;/script&gt;</code>
        which contains executable code. When browser see
        <code>&lt;script&gt;</code>:
      </p>

      <ul>
        <li>Starting show part of page before the <mark>script</mark></li>
        <li>When browser found <mark>script</mark> tag, it starts to execute script</li>
        <li>When script execution completed browser return to reading HTML document</li>
      </ul>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'HelloWorld',
  components: {
    VEmbed
  },

  data: () => ({
    gist: 'ee44b438360346b023b2c9c767e4446d'
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
