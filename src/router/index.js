import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})
