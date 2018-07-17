<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>6. Primitive Types</h1>
    </div>

    <div class="tutorial__body">
      <p>
        JavaScript has the next primitive data types: <mark>number</mark>, <mark>string</mark>,
        <mark>boolean</mark>, <mark>undefined</mark>, <mark>null</mark>. At once it is necessary to note that,
        when we working with primitive data types, for example with strings we can <mark>call they methods</mark> 
        and options without any <mark>transformations</mark>. That because, when we trying to implement some methods literals 
        are <mark>automatically transformed</mark> to the relevant object with properties.
      </p>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'PrimitiveTypes',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [

    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
