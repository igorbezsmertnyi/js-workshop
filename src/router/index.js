import Vue from 'vue'
import Router from 'vue-router'

import Introduction from '@/pages/Introduction'
import WhatCanJs from '@/pages/WhatCanJs'
import WhatCantJs from '@/pages/WhatCantJs'
import DevTools from '@/pages/DevTools'
import HelloWorld from '@/pages/HelloWorld'
import StringPage from '@/pages/String'
import NumberPage from '@/pages/Number'
import BooleanPage from '@/pages/Boolean'
import OperatorsPage from '@/pages/Operators'
import PrimitiveTypes from '@/pages/PrimitiveTypes'
import ObjectPage from '@/pages/Object'
import VariablesPage from '@/pages/Variables'
import ArrayPage from '@/pages/Array'
import FunctionPage from '@/pages/Function'
import KnowledgeTest from '@/pages/KnowledgeTest'

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
    },
    {
      path: '/boolean-type',
      name: 'BooleanPage',
      component: BooleanPage
    },
    {
      path: '/operators',
      name: 'OperatorsPage',
      component: OperatorsPage
    },
    {
      path: '/primitive-types',
      name: 'PrimitiveTypes',
      component: PrimitiveTypes
    },
    {
      path: '/object-type',
      name: 'ObjectPage',
      component: ObjectPage
    },
    {
      path: '/variables',
      name: 'VariablesPage',
      component: VariablesPage
    },
    {
      path: '/array',
      name: 'ArrayPage',
      component: ArrayPage
    },
    {
      path: '/function',
      name: 'FunctionPage',
      component: FunctionPage
    },
    {
      path: '/knowledge-test',
      name: 'KnowledgeTest',
      component: KnowledgeTest
    }
  ]
})
