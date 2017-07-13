<template>
  <div id="app">
    <view-box ref="viewBox"  :body-padding-bottom="'105px'" :style="'box-sizing:border-box;overflow:hidden;'">
        <x-header slot="header" :left-options="{showBack: false}" >个人备忘录</x-header>
        <div class="viewboxmain" slot="default">
            <router-view></router-view>
            <div>
              <group>
                <cell :title="'周逆天'" :value="'哈哈哈'" is-link disabled :arrow-direction="'down'" >{{this.$router.toString()}}</cell>
                <cell title="title" value="value" :border-intent="false">很奇怪啊</cell>
                <cell title="title" value="das" inline-desc="很奇怪啊2">2</cell>
              </group>
            </div>
            <img src="./assets/logo.png" v-show="checked" v-bind:class="{'cur':isClass}" :istrue="reversedMessage">
            <h1 v-html="text"></h1>
            <h2>Essential Links {{msg}} {{reversedMessage}}</h2>
            <ul>
              <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
              <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
              <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
              <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            </ul>
            <h2>Ecosystem</h2>
            <ul>
              <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
              <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
              <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
              <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
            </ul>
            <p>
            <input type="text" v-model="msg">
            <input type="checkbox" v-model="checked">
              {{checked ? "yes" : "no"}}
            </p>

            <p>
              <input type="radio" name="picked" value="one" v-model="picked">
              <input type="radio" name="picked" value="two" v-model="picked">
              {{picked}}
            </p>

            <p>
              <select v-model="selected">
                <option>one</option>
                <option>two</option>
              </select>
              {{selected}}
            </p>

            <p>
              <select v-model="multiSelect" multiple>
                <option>one</option>
                <option>two</option>
                <option>three</option>
              </select>
              {{multiSelect}}
            </p>
            <p><pre>data: {{$data | json2($data)}}</pre></p>
        </div>
        <tabbar slot="bottom">
            <tabbar-item selected>
                <span slot="label">Wechat</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <span slot="label">Message</span>
            </tabbar-item>
            <tabbar-item link="/">
                <span slot="label">Explore</span>
            </tabbar-item>
        </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Group,Cell,XHeader,ViewBox,Tabbar } from 'vux'
import { TabbarItem } from 'vux'


// console.log(vm)

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: "通过<b>v-text</b>方式绑定,html标签在渲染的时候被源码输出了。",
      checked  : true,
      picked   : 'one',
      selected : 'two',
      multiSelect: ['one', 'three'],
      isClass : false
    }
  },
  filters: {
    json2 :function(value) {
      return JSON.stringify(value).split(',');
    }
  },
  components: {
    Group,
    Cell,
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem
  },
  methods: {
    
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      if(this.picked == 'one'){
        this.isClass = false;
      }else{
        this.isClass = true;
      }
      return this.isClass;
    }
  }
}
</script>

<style lang="less">
@import "./assets/css/_reset.less";

html,body{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  margin:0;
  width:100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img{
  opacity: .5;
  &.cur{
    opacity:1;
  }
}

</style>
