<template>
  <div class="logo">
    <img src="@/assets/js-logo.png" alt="Js Workshop Logo">
    <h3>JS Workshop</h3>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="stylus">
.logo
  width 150px
  height 50px
  display flex
  align-items center

  img
    height 100%
    object-fit cover
    box-shadow 4px 3px 20px 1px rgba(136, 136, 136, 0.27)

  h3
    margin 4px 0 0 15px
</style>
