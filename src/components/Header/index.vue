<template>
  <header class="header">
    <logo />
    <side-bar />
  </header>
</template>

<script>
import Logo from './Logo'
import SideBar from './SideBar'

export default {
  name: 'AppHeader',
  components: {
    Logo,
    SideBar
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
