import Vue from 'vue'
import Router from 'vue-router'

import Introduction from '@/pages/Introduction'
import WhatCanJs from '@/pages/WhatCanJs'
import WhatCantJs from '@/pages/WhatCantJs'
import DevTools from '@/pages/DevTools'
import HelloWorld from '@/pages/HelloWorld'
import StringPage from '@/pages/String'
import NumberPage from '@/pages/Number'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? 'js-workshop' : '',
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
    },
    {
      path: '/dev-tools',
      name: 'DevTools',
      component: DevTools
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/string-type',
      name: 'StringPage',
      component: StringPage
    }, 
    {
      path: '/number-type',
      name: 'NumberPage',
      component: NumberPage
    }
  ]
})
