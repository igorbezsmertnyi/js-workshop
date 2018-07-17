<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>6.2 Number</h1>
    </div>

    <div class="tutorial__body">
      <p>
        JavaScript has only <mark>one</mark> type of number - this is a <mark>double-precision floating-point</mark> number. 
        This cause that the results of the calculation of some expressions are arithmetically incorrect.
        Maybe you know that the result of <code>0.1 + 0.2</code> doesn’t a <code>0.3</code>. But if you 
        work with integer this problem doesn’t happen.
      </p>

      <p>
        JS has <mark>Number</mark> object, it represents an object wrapper for numeric values. The Object of type
        Number can be created by using command <code>const a = new Number(10)</code> or you can rely on automatically 
        behaver of JS described above. That allow you to execute methods contains in <code>Number.prototype</code>
        and apply them to the number literals.
      </p>

      <br/>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/cb34f098b7e958cb0af2cc372302d253
      </VEmbed>

      <br/>

      <p>
        There are global functions for transform values of other types to a number type. This is - <mark>parseInt()</mark>,
        <mark>parseFloat()</mark> and constructor <mark>Number()</mark>, which in this case used like simple function 
        which make transformation.
      </p>

      <br/>

      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/d027d4f33021206f6c845dd25840bcf9
      </VEmbed>

      <br/>

      <p>
        If, during the operation with numbers, something is produced that is not a number (during some calculation or trying 
        transformation to number) JavaScript doesn’t give an error, but the result of such an operation as the value of NaN
        (Not-a-Number). For check, if some value is NaN you can use <code>isNaN()</code> function.
      </p>

      <p> 
        The arithmetic operation in JS works quite the usual way, but we must pay attention to the fact that the "+" operator 
        can perform addition of numbers and concatenation of strings.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[2]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/caa0e5ae05d2a3d46d85030ca6d9eb80
      </VEmbed>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'NumberPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [
      'cb34f098b7e958cb0af2cc372302d253',
      'd027d4f33021206f6c845dd25840bcf9',
      'caa0e5ae05d2a3d46d85030ca6d9eb80'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
