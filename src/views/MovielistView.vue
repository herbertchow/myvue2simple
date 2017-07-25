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
      footerClick:true,
      footer: {
        title: '加载中...'
      }
    }
  },
  computed: {
  	
  },
  filter:{
  	
  },
  methods: {
    changeSrc (origin){
      var newSrc = origin.replace(/movie\./g, "m.");
      newSrc = newSrc.replace(/subject/g, "movie\/subject");
      return newSrc;
    },
    copyToSession (){
      if(window.sessionStorage){
        window.sessionStorage.setItem('movieList',JSON.stringify(this.list));
        // console.log(window.sessionStorage.getItem('movieList'))
      }
    },
    resetGetMore (el){
      el.footerClick = true;
      el.footer['title'] = '查看更多';
    },
    initData (data){
      for(var i=0,l=data.length;i<l;i++){
        var castslist = [];
        for(var j=0,len=data[i]['casts'].length;j<len;j++){
          castslist.push(data[i]['casts'][j]['name'])
        }
        this.list.push({
          src:data[i]['images']['small'],
          title:data[i]['title'],
          url:data[i]['alt'],
          desc:'类型：'+data[i]['genres'].toString() + ' | 主演：' +castslist.toString()
        })
      }
    },
    getApiData (){
      var that = this;
      if(!this.footerClick){
        return;
      }
      // console.log(this.page)
      that.footer['title'] = '加载中...';
      this.footerClick = false;
      jsonp('https://api.douban.com/v2/movie/top250?count=8&start='+8*that.page, null, function (err, data) {
        if (err) {
          that.resetGetMore(that);
          console.error(err.message);
        } else {
          that.resetGetMore(that);
          that.initData(data['subjects']);
          that.page++;
          that.copyToSession();
        }
      });
    }
  },
  created: function () {
  	this.$nextTick(function(){
      if(window.sessionStorage && window.sessionStorage.getItem('movieList')){
        this.list = JSON.parse(window.sessionStorage.getItem('movieList'));
        this.page = (this.list.length||0)/8;
        this.resetGetMore(this);
        return;
      }
      this.page = (this.list.length||0)/8;
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
  .movielist-view{
    .weui-media-box:before{
      left: 0;
    }
  }
</style>