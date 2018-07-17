<template>
  <div class="tutorial">
    <div class="tutorial__title">
      <h1>3. What can't JavaScript?</h1>
    </div>

    <div class="tutorial__body">
      <p>
        JavaScript - <mark>fast</mark> and <mark>powerful</mark> language but the browsers impose 
        on its execution some <mark>constraints...</mark>
      </p>

      <p>
        It's made for the <mark>user's security</mark> so that an attacker could not use JavaScript for getting 
        the <mark>personal data</mark> or somehow harm the user's computer.
      </p>

      <ul>
        <li>
          JavaScript can not <mark>read</mark> or <mark>write</mark> random files to the disk, <mark>copy them</mark> or 
          <mark>opened the programs</mark>, it hasn't straight access to the <mark>operating system</mark>.
        </li>
        <li>
          JavaScript working on one tab <mark>cannot communicate</mark> with the other tabs, except for the case when
          himself opened this window or several tabs from one source
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatCantJs'
}
</script>

<style>

</style>
