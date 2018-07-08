<template>
  <div class="tutorial"> 
    <div class="tutorial__title">
      <h1>2. What can JavaScript?</h1>

      <div class="tutorial__body">
        <p>
          Contemporary <mark>JavaScript</mark> this is - "secure" general purpose programming language.
          It hasn't low-level tools for working with memory and processors since, it was initially 
          focused on browsers, in which it is not required.
        </p>

        <p>
          As for the other possibilities - they depend on the environment where JavaScript is running. 
          In a browser, JS can do all that related with page <mark>content manipulation</mark>, 
          <mark>user interaction</mark> and some extent, with a <mark>server</mark>:
        </p>

        <ul>
          <li>Creating HTML-tags, remove existing, changing component styles, hide and show element etc.</li>
          <li>React to user actions, mouse clicks, moves and keyboard clicks</li>
          <li>Sending request to the server and getting data without page reloading
            <a href="https://en.wikipedia.org/wiki/Ajax_(programming)" target="_blank">(AJAX)</a>
          </li>
          <li>Get and set cookies, requests data, deduce messages</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatCanJs'
}
</script>

<style lang="stylus">
@import '../styles'
</style>

