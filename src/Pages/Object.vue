<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>6.4 Object</h1>
    </div>

    <div class="tutorial__body">
      <p>
        The object is a <mark>dynamic data structure</mark> consisting of <mark>key-value pairs</mark>. The values 
        can be primitive data or a function.
      </p>

      <strong>
        Objects are easiest to create using the syntax of object literals:
      </strong>

      <br/>
      <br/>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/ae7a2f64d1f644d3768eb08c640a2796
      </VEmbed>

      <strong>
        We can read, add, edit and remove an object’s properties at any time:
      </strong>

      <ul>
        <li>
          get: <code>object.name</code>, <code>object[expression]</code>
        </li>
        <li>
          set: <code>object.name = value</code>, <code>object[expression] = value</code>
        </li>
        <li>
          delete: <code>delete object.name</code>, <code>delete object[expression]</code>
        </li>
      </ul>

      <br/>

      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/caa3e289ae7a6bb1207a7d3f2f6cad27
      </VEmbed>

      <br/>

      <p>
        In JavaScrtipt object are implemented as <mark>hash-map</mark>. Empty hash-map can be reated using 
        <code>Object.create(null)</code>
      </p>

      <p class="tutorial__body__lead">
        If you wont make object imutaleble use <code>Object.freeze()</code>
      </p>

      <br/>

      <strong>
        <code>Object.keys()</code> can be used for iterate over all properties.
      </strong>

      <br/>
      <br/>

      <VEmbed class="tutorial__gist" :id="gists[2]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/ca97f2a605b25790bfb654c8b9232c53
      </VEmbed>

      <br/>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'ObjectPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [
      'ae7a2f64d1f644d3768eb08c640a2796',
      'caa3e289ae7a6bb1207a7d3f2f6cad27',
      'ca97f2a605b25790bfb654c8b9232c53'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>

