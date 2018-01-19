import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Single from '@/components/Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/:slug',
      name: 'Single',
      component: Single
    }
  ]
})
