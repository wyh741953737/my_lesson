// pages/index/movie/movie.js
var app=getApp();
Page({
data:{},
onLoad:function(options){
  console.log(app.globalUrl.doubanUrl);
  var inTheat = "/v2/movie/in_theaters?start=0 & count=3";
  var comingSoon = "/v2/movie/coming_soon?start=0 & count=4";
  var Top250 = "/v2/movie/top250?start=0 & count=5";
  this.http(inTheat,this.callback);
  this.http(comingSoon, this.callback);
  this.http(Top250, this.callback);
},
http:function(category,count,callback){
  wx.request({
    url: app.globalUrl.doubanUrl+category+"?start=0&count="+count,
    header:{
      'content-type':'application/xml'
    },
    success:function(res){
     callback(res.data);
    }
  })
},
callback:function(res){
  console.log(res);
}
})