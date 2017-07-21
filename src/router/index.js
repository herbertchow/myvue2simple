import Vue from 'vue'
import Router from 'vue-router'

import MarklistView from '../views/MarklistView.vue'
import MovielistView from '../views/MovielistView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'marklistview',
      component: MarklistView
    },
    {
      path: '/bar',
      namr:'barview',
      component: {template:'<div>bar</div>'}
    },
    {
      path: '/mov',
      namr:'movview',
      component: MovielistView
    }
  ]
})
