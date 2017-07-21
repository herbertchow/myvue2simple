<template>
	<div class="movielist-view">
		<panel :footer="footer" :list="list" :type="type" @on-click-footer="getApiData"></panel>
  </div>
</template>

<script>
import { Panel  } from 'vux'
import jsonp from 'jsonp'

export default {
  name: 'movielist-view',
  components: { 
    Panel
  },
  data () {
    return {
      type:'1',
      list:[],
      // castslist:[],
      page:0,
      footer: {
        title: '查看更多'
      }
    }
  },
  computed: {
  	
  },
  filter:{
  	
  },
  methods: {
    initData (data){
      for(var i=0,l=data.length;i<l;i++){
        var castslist = [];
        for(var j=0,len=data[i]['casts'].length;j<len;j++){
          castslist.push(data[i]['casts'][j]['name'])
        }
        this.list.push({
          src:data[i]['images']['small'],
          title:data[i]['title'],
          desc:'类型：'+data[i]['genres'].toString() + ' | 主演：' +castslist.toString()
        })
      }
    },
    getApiData (){
      console.log(this.page)
      var that = this;
      jsonp('https://api.douban.com/v2/movie/top250?count=8&start='+8*that.page, null, function (err, data) {
        if (err) {
          console.error(err.message);
        } else {
          that.initData(data['subjects']);
          that.page++;
        }
      });
    }
  },
  created: function () {
  	this.$nextTick(function(){
  		this.getApiData();
  	})
  },
  mounted: function () {

  }
}
</script>

<style lang="less" scope>
	.weui-media-box__title{
    text-align: left;
    margin-bottom: 5px;
  }
  .weui-media-box__desc{
    text-align: left;
  }
</style>