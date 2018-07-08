<template>
  <aside class="side-bar">
    <nav class="side-bar__nav">
      <ul class="side-bar__list">
        <router-link v-for="(page, index) of pages" :key="index" :to="page.href">
          <li class="side-bar__item">
            {{ page.label }}
          </li>
        </router-link>
      </ul>
    </nav>
  </aside>
</template>

<script>
import Pages from '@/pageList.json'

export default {
  name: 'SideBar',
  data: () => ({
    pages: Pages.pages
  })
}
</script>

<style lang="stylus">
@import '../../styles'

.side-bar
  margin-top 20px
  max-height calc(100vh - 80px)
  overflow-y auto

  &__nav
    width 100%
    height 100%

  &__list
    padding 0 0 0 8px

    a
      color $green

  &__item
    color $green
    font-size $font-menu
    text-decoration-color $green
    padding 8px 0 6px
</style>
