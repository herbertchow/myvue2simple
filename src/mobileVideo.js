var mobileVideoPlayer = function(){ //定义单例

    var _class = function(options){//内部类
        this.options=$.extend({
            playBtn:''
        },options);
        this.init();
    }
    _class.prototype = {//对象私有方法
        init : function(){//对象初始化
             this.initialize();
             this.addEvent();
             
             // this.startAni(); //开始动画动画
             // console.log(this);
        },
        //绑定函数
        addEvent:function(){//事件绑定
            console.log(3333)
        },
        setTamplate:function(vid){
            var self = this;
            self.tamplate = '<div class="bg'+self.timeNumId+'"></div><video src="'+vid+'" controls="controls" id="tsvideo'+self.timeNumId+'"></video>';
            $('body').append('<div id="video'+self.timeNumId+'"></div>');
            return self.tamplate;
        },
        addDomClass:function(){
            var self = this;
            var cssText = "#video"+self.timeNumId+"{position:fixed;width:100%;height:100%;top:0;left:0;display:none;z-index:9999;bottom:0} "
            + "#video"+self.timeNumId+" .bg"+self.timeNumId+"{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.8;bottom:0} "
            + "#tsvideo"+self.timeNumId+"{position:absolute;top:50%;left:0;width:100%;-webkit-transform: translate3d(0,-50%,0);transform: translate3d(0,-50%,0);}";
            $('body').append("<style type='text/css'>"+cssText+"</style>");
        },
        setVideo:function(){
            var self = this;
            self.playBtn = self.options.playBtn;
            var _child = '.bg'+self.timeNumId;
            $("#video"+self.timeNumId).on("touchend",_child, function () {
               setTimeout(function () {
                   $("#video"+self.timeNumId).hide(), $("#video"+self.timeNumId).html("");
                }, 400)
            });
            $(self.playBtn).on('click',function () {
                var e = $(this).attr("data-vid");
                $("#video"+self.timeNumId).html(self.setTamplate(e)).show();
                var n = $("#tsvideo"+self.timeNumId).get(0);
                setTimeout(function () {
                    n.play();
                }, 50)
            });
        },
        //初始化
        initialize:function(){
            var self = this;
            self.timeNumId = Math.floor(Math.random()*100);
            self.addDomClass();
            self.setTamplate();
            self.setVideo();
        }
    }
    return {
        setting:function(options){//提供给外部调用的方法，修改所有实例的公有参数
             setParam(options);
        },
        //开始
        play:_class.play,
        create : function(options){//提供给外部调用的方法，创建实例
            return new _class(options);
        }
    }
}();

//调用方式
// var a = mobileVideoPlayer.create({
//     'playBtn':'.top-banner'
// });