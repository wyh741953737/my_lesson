//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    num:110,
  },
  //事件处理函数
  
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        num: 9
      })
    }, 3000)
  }
})
