import Vue from 'vue'
import Router from 'vue-router'

import MarklistView from '../views/MarklistView.vue'

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
      path: '/foo',
      namr:'fooview',
      component: {template:'<div>foo</div>'}
    }
  ]
})
