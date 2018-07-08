<template>
  <div class="tutorial">
    <div class="tutorial__title">
      <h1>3. What can't JavaScript?</h1>
    </div>

    <div class="tutorial__body">
      <p>
        JavaScript - <mark>fast</mark> and <mark>powerful</mark> language but the browsers impose 
        on its execution some constraints...
      </p>

      <p>
        It's made for the user's security so that an attacker could not use JavaScript for getting 
        the personal data or somehow harm the user's computer.
      </p>

      <ul>
        <li>
          JavaScript can not read or write random files to the disk, copy them or opened the programs, 
          it hasn't straight access to the operating system
        </li>
        <li>
          JavaScript working on one tab cannot communicate with the other tabs, except for the case when
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
