<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>10. Function</h1>
    </div>

    <div class="tutorial__body">
      <p>
        <mark>Function</mark> in JavaScript is an object. Function can be assigned to the variable, 
        stored in the other objects or arrays, transferred like an argument to the other Functions and 
        return from other function.
      </p>

      <br/>

      <strong>
        There are three ways to define a function:
      </strong>

      <ul>
        <li>
          Function Declaration (Function Statement)
        </li>
        <li>
          Function Expression (Function Literal)
        </li>
        <li>
          Arrow Function
        </li>
      </ul>

      <p class="tutorial__body__lead">
        Function Declaration
      </p>

      <ul>
        <li>
          The first word in line is <mark>function</mark>.
        </li>
        <li>
          Function must have a <mark>name</mark>.
        </li>
        <li>
          Function can be used before definition. Function declarations 
          are moved, or “hoisted”, to the top of their scope.
        </li>
      </ul>

      <VEmbed class="tutorial__gist" :id="gists[0]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/a1f97177ee33c11b9896f4da74eb425e
      </VEmbed>

      <p class="tutorial__body__lead">
        Function Expression
      </p>

      <ul>
        <li>
          <mark>function</mark> isn't the first keyword on the line.
        </li>
        <li>
          The function name is <mark>optional</mark>. There can be an anonymous function expression 
          or a named function expression.
        </li>
        <li>
          The function needs to be <mark>defined</mark>, then it can be executed.
        </li>
        <li>
          The function can be executed <mark>after definition</mark> (called “IIFE” Immediately 
          Invoked Function Expression)
        </li>
      </ul>

      <VEmbed class="tutorial__gist" :id="gists[1]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/d6c8e8617966fe84fffeeab4b2731cf9
      </VEmbed>

      <p class="tutorial__body__lead">
        Arrow Function
      </p>

      <p>
        The arrow function is a syntax for creating an anonymous function expression. Arrow function
        don’t have their own <mark>this</mark> and <mark>arguments</mark> methods.
      </p>

      <VEmbed class="tutorial__gist" :id="gists[2]" :options="{ emoji: true }">
        https://gist.github.com/igorbezsmertnyi/aaf340f403f705b8fa67f2959e1f1d4d
      </VEmbed>

      <p class="tutorial__body__lead">
        return
      </p>

      <p>
        A function with no return statement returns undefined. Pay attention to the automatic 
        semi-colon insertion when using return. The following function will not return an empty 
        object, but rather an undefined one.
      </p>
    </div>
  </div>
</template>

<script>
import VEmbed from 'vue-embed'

export default {
  name: 'FunctionPage',
  components: {
    VEmbed
  },

  data: () => ({
    gists: [
      'a1f97177ee33c11b9896f4da74eb425e',
      'd6c8e8617966fe84fffeeab4b2731cf9',
      'aaf340f403f705b8fa67f2959e1f1d4d'
    ]
  })
}
</script>

<style lang="stylus">
@import '../styles'
</style>
