//index.js
//获取应用实例
var app = getApp()

Page({
  data:{
  longitude:" ",
  latitude:" ",
    controls:[{
      id: 1,
      iconPath: '/resources/1.jpg',
      position: {
        left: 0,
        top: 0,
        width: 22,
        height: 31
      },
      clickable:true
    }]
  },
  onshow(){
this.getLocation();
  },

  getLocation(){
    wx.getLocation({
        type: 'gcj02',
        success: this.handleGetLocationSucc(this)
    })
  },
  handleGetLocationSucc(res)
  {
    this.setData({
      longitude:res.longitude,
      latitude:res.latitude
    })
    //console.log(res);
  },
  onShareAppMessage(){
    return{
      title:"萌宠",
      path:'page/index/index'
    }
  }
})
