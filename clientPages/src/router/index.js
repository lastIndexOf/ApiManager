import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/home/home'
// import addnew from '../components/new/new'
const addnew = r => require.ensure([], () => r(require('../components/new/new')), 'addnew')

let router = new Router({
  routes: [
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'new',
          component: resolve => require(['../components/new/new'], resolve)
        },
        {
          path: 'sign',
          component: resolve => require(['../components/sign/sign'], resolve)
        }
      ]
    }
  ]
})

router.push('/home')

export default router