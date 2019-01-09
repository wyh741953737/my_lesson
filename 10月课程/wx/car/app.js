//app.js
App({
  onLaunch: function () {
    console.log('应用启动了');
    // console.log(app.globalData.motto);
    wx: wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        console.log(response)
      },
      error:function(err){
        console.log(err);
      }
    })
  },
  globalData:{
    motto:'Hello'

  }
})
    // 展示本地存储能力
  