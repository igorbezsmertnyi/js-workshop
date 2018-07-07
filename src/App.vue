<template>
  <div id="app">
    <app-header />

    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="stylus">
@import './styles'
</style>
