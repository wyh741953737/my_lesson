
var newsData=require("../../data/newsdata.js");
Page({
  data: {
    isplayer: false
  },

   onLoad: function (options) {
 console.log(newsData[options.newsid]);
 this.setData(  newsData.initData[options.newsid] )
  this.setData({  newsid:options.newsid})
  // var newsCollect={     0:true,  1:false,   2:true  }
//第一次进入判断是否存在本地存储以及是否收藏
 var newsCollect=wx.getStorageSync("newsCollect");
 //如果newsCollect存在，代表以前收藏过或者以前取消过收藏
 if(newsCollect){
   var newsCollect=newsCollect[options.newsid];
   this.setData({     collected:newsCollect   })
 }else{
   //第一次进来根本不存在数据
   var newsCollect={};
   newsCollect[options.newsid]=false;
   wx.setStorageSync('newsCollect',newsCollect);
 }
   },
  collectTap:function(e){
  // console.log(this.data.newsid);
  var newsCollect=wx.getStorageSync('newsCollect');
    var newCollect=newsCollect[this.data.newsid];
    newCollect = !newCollect;
    newsCollect[this.data.newsid] = newCollect;
  wx.setStorageSync('newsCollect',newsCollect);
  this.setData({
    collected: newCollect
      })
wx.showToast({
  title: newsCollect[this.data.newsid] ? '收藏成功':'取消成功',
  icon:'success',
  duration:600,
  mask:true
})
    wx.showShareMenu({
      withShareTicket: true
    })

   },
onshare:function(){
  wx.showActionSheet({
    itemList: ['分享到微信', '分享到QQ', '分享到微博'],
    success(res) {
      console.log(res.tapIndex)
    },
    fail(res) {
      console.log(res.errMsg)
    }
  })
},
  
 onShareMessage:function(){
   return {
     title:newsData.initData[this.data.newsid].title,
     path: '/pages/index/news-detail/news-detail'                                                                                
   }
 },

  playmusicTap:function(e){
    var that=this;
  //   wx.getBackgroundAudioPlayerState({
  //     success:function(res){
  //       var status=res.status;
  //       if(status !=1){
  //         wx.playBackgroundAudio({
  //           dataUrl: newsData.initData[that.data.newsid].music.url,
  //           title: newsData.initData[that.data.newsid].music.title,
  //           coverImgurl: newsData.initData[that.data.newsid].music.coverImg
  //         })
  //         this.setData({
  //           isplayer:true
  //         })
  //       }else{
  //         wx.pauseBackgroundAudio();
  // this.setData({
  //   isplayer: false
  // })
  //       }
  //     }
  //   })
  wx.getBackgroundAudioPlayerState({
  success:function(res){
    var status=res.status;
    if(status!=1)
    {
      wx.playBackgroundAudio({
        dataUrl: newsData.initData[that.data.newsid].music.url,
        title: newsData.initData[that.data.newsid].music.title,
        coverImgurl: newsData.initData[that.data.newsid].music.coverImg
      })
      this.setData({
        isplayer:true
      })
    }else{
      wx.pauseBackgroundAudio();
      this.setData({
        isplayer:false
      })
    }
  }
  })
   
}
})