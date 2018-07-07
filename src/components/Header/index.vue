<template>
  <header class="header">
    <logo />
  </header>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'AppHeader',
  components: {
    Logo
  }
}
</script>

<style lang="stylus">
@import '../../styles'

.header
  position fixed
  height 120px
  top 0
  left 0
  padding 20px
</style>
