<template>
  <div id="app">
    <view-box ref="viewBox"  :body-padding-bottom="'105px'" :style="'box-sizing:border-box;overflow:hidden;'">
        <x-header slot="header" :left-options="{showBack: false}" >个人便签</x-header>
        <div class="viewboxmain" slot="default">
            <router-view></router-view>
        </div>
        <tabbar slot="bottom">
            <tabbar-item :selected="isSelected==0?true:false"  @on-item-click="onItemClickCb">
                <span slot="label">便签</span>
                <!-- <span slot="icon">1</span> -->
            </tabbar-item>
            <tabbar-item :selected="isSelected==1?true:false" show-dot @on-item-click="onItemClickCb">
                <span slot="label">电影</span>
                <!-- <span slot="icon">1</span> -->
            </tabbar-item>
            <tabbar-item :selected="isSelected==2?true:false" link="/" @on-item-click="onItemClickCb">
                <span slot="label">个人</span>
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
      isSelected:0
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
  created () {
    this.$nextTick(() => {
      // console.log(222)
      this.initTabStatus();
      // console.log(vm)
      // console.log(TabbarItem.data().simple);
      // this.$emit('on-item-click', this.currentIndex)
    })
  },
  methods: {
    onItemClickCb :function(currentIndex){
        console.log(currentIndex)
        // console.log(this.currentIndex)
        if(currentIndex === 2){
            this.$router.push('/dashboard')
        }else if(currentIndex === 1){
            this.$router.push('/mov')
        }else{
            this.$router.push('/')
        }
    },
    initTabStatus:function(){
      if(this.$router.currentRoute.path === '/dashboard'){
        this.isSelected = 2;
      }else if(this.$router.currentRoute.path === '/mov'){
        this.isSelected = 1;
      }else{
        this.isSelected = 0;
      }
    }
  },
  watch:{

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


// img{
//   opacity: .5;
//   &.cur{
//     opacity:1;
//   }
// }


</style>
