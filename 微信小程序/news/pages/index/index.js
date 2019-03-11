//index.js
//获取应用实例
var newsData=require('../data/newsdata.js')
const app = getApp()

Page({
  data: {
    indicatorDots:true,
    autoPlay:true,
  },
  //事件处理函数
 
  onLoad: function (options) {
   console.log(newsData);
   this.setData({
    useData:newsData.initData
   })
  },
  goNewDetail:function(e){
    console.log(e);
    var newsId = e.currentTarget.dataset.news;
  
   wx.navigateTo({
     url: 'news-detail/news-detail?newsid='+newsId,
   })
  }
})
