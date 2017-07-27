<template>
	<div class="dashboard-view">
      <group class="avatar-wrap">
        <cell-box>
		      <img src="../assets/man.png" alt="" class="avatar" v-show="sex==1?true:false">
           <img src="../assets/woman.png" alt="" class="avatar" v-show="sex==2?true:false">
          <span>
            <i :class="{'i-show': editType}">{{name}}</i>
            <em v-show="!editType">{{sex | sexChange}}</em>
            <div v-show="editType" class="sex-selwrap">
              <label for="male">男</label>
              <input type="radio" name="picked" value="1" v-model="sex" id="male">
              <label for="female">女</label>
              <input type="radio" name="picked" value="2" v-model="sex" id="female">
            </div>
            <x-input class="add-txt" :placeholder="'昵称最多12字或字符'" :max="13" v-show="editType" title="" v-model="name"></x-input> 
          </span>
          <x-button class="edit-btn" mini v-show="!editType" type="default" @click.native="onButtonClick()">编辑</x-button> 
          <x-button class="confirm-btn" mini v-show="editType" type="primary" @click.native="onButtonClick()">确认</x-button>
        </cell-box>
      </group>
      <group class="main-wrap" v-show="!editType">
        <cell class="desc" :title="'个人简介'" :border-intent="false" :value="desc" @click.native=""></cell>
        <cell class="desc" :title="'兴趣爱好'" :border-intent="false" :value="hobby" @click.native=""></cell>
      </group>
      <group class="main-wrap-edit" v-show="editType">
        <x-input :title="'个人简介'" v-model="desc"></x-input>
        <x-input :title="'兴趣爱好'" v-model="hobby"></x-input>
      </group>
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
      name:'万里依然',
      sex:1,
      desc:'不会炒菜的产经不是好的程序员',
      editType:false, //true为编辑中，false为常态
      hobby:'唱歌、游泳、打机'
    }
  },
  computed: {
  	
  },
  filters:{
  	hobbyTxt (value){
      return value.toString().replace(/,/g,'、');
    },
    sexChange (value){
      var sex;
      return value == 1?'男':'女';
    }
  },
  methods: {
  	onButtonClick (tag) {
      if(!this.xtrim(this.name)){
        alert('内容不能为空');
        return;
      }
      if(window.localStorage){
        var localData = {};
        localData['name'] = this.$data['name'];
        localData['sex'] = this.$data['sex'];
        localData['desc'] = this.$data['desc'];
        localData['hobby'] = this.$data['hobby'];
        window.localStorage.setItem('vueUserData',JSON.stringify(localData));
      }
      this.editType = !this.editType;
    },
    xtrim (str) {
			return str.replace(/(^\s*)|(\s*$)/g, ""); 	 //去除首尾空格
		},
    onBtnClick () {
    	// if(!this.xtrim(this.txtValue)){
    	// 	alert('便签内容不能为空');
    	// 	return;
    	// }
    
    }
  },
  created: function () {
    this.$nextTick(function(){
      if(window.localStorage && window.localStorage.getItem('vueUserData')){
        var localData = JSON.parse(window.localStorage.getItem('vueUserData'));
        this.name = localData['name']; 
        this.sex = localData['sex']; 
        this.desc = localData['desc']; 
        this.hobby = localData['hobby'];
      }
  	})
  }
}
</script>

<style lang="less" scope>
  .bb(){
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
  .avatar-wrap{
    text-align: left;
    span{
      width: 55%;
      display: inline-block;
      margin-left: 15px;
      float: left;
      position: relative;
    }
    img{
      vertical-align: top;
      float: left;
      width: 25%;
      max-width: 70px;
      max-height: 70px;
    }
    i{
      display: block;
      font-weight: normal;
      font-style: normal;
      line-height: 1.41176471;
      min-height: 1.41176471em;
      &.i-show{
        visibility: hidden;
      }
    }
    em{
      display: block;
      font-weight: normal;
      font-style: normal;
      margin-top: 10px;
    }
    .edit-btn,.confirm-btn{
      position: absolute;
      right: 5px;
      top: 10px;
      margin: 0;
    }
    .weui-btn + .weui-btn{
      margin: 0;
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
  .vux-cell-box > div{
    width: 100%;
    &:after{
      display: block;
      height: 0;
      content: "\0020";
      clear: both;
    }
  }
  .weui-cell.add-txt{
    .bb();
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
    &:before{
      border-top: none;
      border-bottom: 1px solid #d9d9d9;
      left:0;
      top: auto;
      bottom: -5px;
    }
  }
  .weui-cell_warn .weui-icon-warn{
    display: none!important;
  }
  .sex-selwrap{
    margin-top: 10px;
  }
  .vux-x-input.weui-cell:before{
    left: 0;
  }
  .main-wrap-edit{
    .vux-x-input.weui-cell{
      padding-left: 10px;
    }
    .weui-label{
      font-size: .28rem;
    }
  }
</style>