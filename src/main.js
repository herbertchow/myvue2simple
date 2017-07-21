import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.use({router:router})

Vue.config.productionTip = false


// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// // 2. 定义路由
// // 每个路由应该映射一个组件。 其中"component" 可以是
// // 通过 Vue.extend() 创建的组件构造器，
// // 或者，只是一个组件配置对象。
// // 我们晚点再讨论嵌套路由。
// const routes = [
//   { path: '/foo',name: 'marklistview', component: MarklistView },
//   { path: '/bar', component: Bar }
// ]

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//   router
// }).$mount('#app')

var vm = new Vue({
  el: '#app',
  router,//router:router,
  // render: h => h(App) //这一行效同下面两行，用于没有编译器的vue模板，下面的需要编译器
  template: '<App/>',
  components: { App },
  data:{
  	allT:[
        {
          title:'你可以记录自己的便签',
          id:1
        },
        {
          title:'左滑删除',
          id:2
        },
        {
          title:'数据记录在本浏览器，更换即还原默认',
          id:3
        },
        {
          title:'清理缓存即可清空数据，还原默认',
          id:4
        },

        {
          title:'比如',
          id:5
        },
        {
          title:'今天要买水果',
          id:6
        },
        {
          title:'闹钟调了吗',
          id:7
        }
    ]
  }
})

// vm.use(router)
global.vm = vm;


// console.log(vm)

