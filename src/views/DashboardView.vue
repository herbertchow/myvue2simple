<template>
	<div class="dashboard-view">
      <group class="avatar-wrap">
        <cell-box>
		      <img src="../assets/man.png" alt="" class="avatar">
          <span>
            <i>万里依然</i>
            <em>男</em>
          </span>
        </cell-box>
      </group>
      <group class="main-wrap">
        <cell class="desc" :title="'个人简介'" :border-intent="false" :value="'不会炒菜的产经不是好的程序员'" @click.native=""></cell>
        <cell class="desc" :title="'兴趣爱好'" :border-intent="false" :value="'唱歌、游泳、打机'" @click.native=""></cell>
      </group>
      <!-- <group class="add-wrap">
	   		<x-input class="add-txt" title="便签" v-model="txtValue"></x-input>
			</group>
   		<x-button class="add-btn yes" mini type="primary" @click.native="onBtnClick">确认</x-button> -->
    </div>
</template>

<script>
import { XInput,Group,XButton,Cell,CellBox,XImg} from 'vux'
// import jsonp from 'jsonp'

export default {
  name: 'dashboard-view',
  components: { 
    XInput,
    XButton,
    Group,
    Cell,
    CellBox,
    XImg
  },
  data () {
    return {
      allTask:[],
      txtValue:''
    }
  },
  computed: {
  	
  },
  filter:{
  	
  },
  methods: {
  	onButtonClick (index) {
     
    },
    xtrim (str) {
			return str.replace(/(^\s*)|(\s*$)/g, ""); 	 //去除首尾空格
		},
    onBtnClick () {
    	if(!this.xtrim(this.txtValue)){
    		alert('便签内容不能为空');
    		return;
    	}
    
    }
  },
  created: function () {
  	this.$nextTick(function(){
  	
  	})
  }
}
</script>

<style lang="less" scope>
  .avatar-wrap{
    text-align: left;
    span{
      width: 250px;
      display: inline-block;
      margin-left: 10px;
    }
    img{
      vertical-align: top;
    }
    i{
      display: block;
      font-weight: normal;
      font-style: normal;
    }
    em{
      display: block;
      font-weight: normal;
      font-style: normal;
      margin-top: 10px;
    }
  }
  .desc{
    .weui-cell__ft{
      box-flex: 3;
      flex:3;
      text-align: left;
    }
  }
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