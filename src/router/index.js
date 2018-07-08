import Vue from 'vue'
import Router from 'vue-router'

import Introduction from '@/pages/Introduction'
import WhatCanJs from '@/pages/WhatCanJs'
import WhatCantJs from '@/pages/WhatCantJs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: window.location.pathname,
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/what-can-javasctipt',
      name: 'WhatCanJs',
      component: WhatCanJs
    },
    {
      path: '/what-cant-javascrip',
      name: 'WhatCantJs',
      component: WhatCantJs
    }
  ]
})
