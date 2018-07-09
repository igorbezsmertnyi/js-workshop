<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>6.2 Number</h1>
    </div>

    <div class="tutorial__body">
      <p>
        Numbers are values that can be used in mathematical operations. You don’t need any special syntax 
        for numbers — just write them straight into JavaScript.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/b3d5c3cdadf453f197fbc2da5c45df21
      </VEmbed>

      <h3>Operators</h3>

      <ul>
        <li>+ Addition</li>
        <li>- Subtraction</li>
        <li>*	Multiplication</li>
        <li>%	Modulus (Division Remainder)</li>
        <li>++ Increment</li>
        <li>-- Decrement</li>
      </ul>

      <VEmbed class="tutorial__gist" :id="gists[8]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/d51ee20f7499da7e01ec875edca6632b
      </VEmbed>

      <h3>Decimals and fractions</h3>
      <p>
        JavaScript doesn’t distinguish between whole numbers and decimals, so you can use them together without 
        having to convert from one to the other.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/f0fbb440d7d5aa84e2411f511f7e94f8
      </VEmbed>

      <p>
        <mark>Fractions</mark> don’t exist in JavaScript, buy you can rewrite them as division problems using 
        the division operator /. Note that the resulting number is always converted to decimals — just like with a calculator.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[2]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/abccded6f03fa8a0e46e58ab0fa89b52
      </VEmbed>

      <p>Improper fractions use the division operator in the same way.</p>

      <VEmbed class="tutorial__gist" :id="gists[3]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/e2e56fd83fd720f88d4afbcdc140fcae
      </VEmbed>

      <p>To use mixed numbers, you need to add the whole number and fraction.</p>

      <VEmbed class="tutorial__gist" :id="gists[4]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/a2ae4487fb0d115a3af841ea9a0ef8f2
      </VEmbed>

      <h3>Negative numbers</h3>
      <p>You can make a number negative by placing the - operator in front.</p>

      <VEmbed class="tutorial__gist" :id="gists[5]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/ac73939dc8846ab7ab6d3bd49d9422f1
      </VEmbed>

      <p>You can also get a negative number by subtracting a number from a smaller number.</p>

      <VEmbed class="tutorial__gist" :id="gists[6]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/f1108b80f9a491d6cec25943efbdc29c
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
      'b3d5c3cdadf453f197fbc2da5c45df21',
      'f0fbb440d7d5aa84e2411f511f7e94f8',
      'abccded6f03fa8a0e46e58ab0fa89b52',
      'e2e56fd83fd720f88d4afbcdc140fcae',
      'a2ae4487fb0d115a3af841ea9a0ef8f2',
      'ac73939dc8846ab7ab6d3bd49d9422f1',
      'f1108b80f9a491d6cec25943efbdc29c',
      'd51ee20f7499da7e01ec875edca6632b'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
