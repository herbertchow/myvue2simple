<template>
	<div class="marklist-view">
		<swipeout>

	      <swipeout-item v-for="item in allTask" :key="item.id" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
	        <div slot="right-menu">
	          <swipeout-button @click.native="onButtonClick(item.id)" type="warn">删除</swipeout-button>
	        </div>
	        <div slot="content" class="demo-content vux-1px-t">
	        {{item.title}}
	        </div>
	      </swipeout-item>

	    </swipeout>
	    <group class="add-wrap">
	   		<x-input class="add-txt" title="便签" v-model="txtValue"></x-input>
			</group>
   		<x-button class="add-btn yes" mini type="primary" @click.native="onBtnClick">确认</x-button>
    </div>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton,XInput,Group,XButton   } from 'vux'

export default {
  name: 'marklist-view',
  components: { 
  	Swipeout, 
    SwipeoutItem, 
    SwipeoutButton,
    XInput,
    XButton,
    Group
  },
  data () {
    return {
      allTask:[
        {
          title:'今天要买水果',
          id:1
        },
        {
          title:'交物业费',
          id:2
        },
        {
          title:'记录账目',
          id:3
        },
        {
          title:'吃饭要拿发票',
          id:4
        },
        {
          title:'买油罐子',
          id:5
        },
        {
          title:'买米了吗',
          id:6
        },
        {
          title:'闹钟调了吗',
          id:7
        }
      ],
      txtValue:''
    }
  },
  computed: {
  	
  },
  filter:{
  	
  },
  methods: {
  	onButtonClick (index) {
      this.allTask.splice(index-1,1);
      for(var i = 0,l=this.allTask.length;i<l;i++){
      	this.allTask[i]['id'] = i+1;
      }
      // console.log(this.allTask);
    },
    handleEvents (type) {
      console.log('event: ', type)
    },
    xtrim (str) {
			return str.replace(/(^\s*)|(\s*$)/g, ""); 	 //去除首尾空格
		},
    onBtnClick () {
    	if(!this.xtrim(this.txtValue)){
    		alert('便签内容不能为空');
    		return;
    	}
    	var nowId = this.allTask.length + 1;
    	this.allTask.push({
        title:this.xtrim(this.txtValue),
        id:nowId
      });
      this.txtValue = '';
      vm.$data.allT = this.allTask;
    }
  },
  created: function () {
  	this.$nextTick(function(){
  		this.allTask = vm.$data.allT;
  	})
  }
}
</script>

<style lang="less" scope>
	.demo-content {
	  padding: 10px 10px;
	}
	.marklist-view{
		position: relative;
		padding-bottom: 50px;
	}
	.vux-1px-t{
		position: relative;
		font-size: 16px;
		text-align: left;
		padding: 15px 20px;
		border-bottom: 1px solid #eee;
	}
	.add-wrap{
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 85%;
    .weui-cells{
    	border-top: 1px solid #bbb;
    }
	}
	.add-btn.yes{
    position: fixed;
    bottom: 50px;
    right: 0;
    width: 15%;
    border-radius: 0;
    height: 45px;
    text-align: center;
    padding: 0;
	}
</style>