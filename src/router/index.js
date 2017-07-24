import Vue from 'vue'
import Router from 'vue-router'

import MarklistView from '../views/MarklistView.vue'
import MovielistView from '../views/MovielistView.vue'
import DashboardView from '../views/DashboardView.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'marklistview',
      component: MarklistView
    },
    {
      path: '/dashboard',
      namr:'dashboardview',
      component: DashboardView
    },
    {
      path: '/mov',
      namr:'movview',
      component: MovielistView
    }
  ]
})
