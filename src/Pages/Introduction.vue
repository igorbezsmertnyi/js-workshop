<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>1. Introduction</h1>
    </div>

    <div class="tutorial__body">
      <h3>What is JavaScript?</h3>
      
      <p>
        <mark>JavaScript</mark> was originally created for making web pages "live". Programs on this language are called <em>scripts</em>.
        In browsers scripts straightly connected to HTML document and initialized at once when the page loaded.
      </p>

      <br />

      <p>
        <strong>Programs on JavaScript - regular string. They are not required special preparing before running</strong>
      </p>

      <br />

      <h3>Why JavaScript?</h3>

      <p>
        When was creating JavaScript, it had another name <mark>"LiveScript"</mark>. Then was very popular Java, and marketers decided 
        that the similar name will make the language more popular on start.
      </p>
      <br />
      <p>
        Was planned that JavaScript will be such "small brother" of Java. But history ordered otherwise. But history ordered otherwise, 
        JavaScript fast grew up, and now JavaScript is independent language, with own specification
        <a href="https://ru.wikipedia.org/wiki/ECMAScript" target="_blank">(ECMAScript)</a> and Java has nothing to do with it.
      </p>
      <br />
      <p>
        It has many features which make learning hard but in this course, we will try to explain it
      </p>

      <p class="tutorial__body__lead">
        JavaScript can be running not only in browsers but in other places, only a special program is needed - the interpreter.
        The process of script implementation called interpretation.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style lang="stylus">
@import '../styles'
</style>
