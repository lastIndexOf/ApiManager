import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/home/home'
import addnew from '../components/new/new'

let router = new Router({
  routes: [
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'new',
          component: addnew
        }
      ]
    }
  ]
})

router.push('/home')

export default router