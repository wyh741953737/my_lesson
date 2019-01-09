//app.js
App({

  globalData:{

  },
  onLaunch: function () {
  try{
    const res=wx.getSystemInfoSync()
    this.globalData.windowHeight=res.windowHeight;
    this.globalData.windowWidth=res.windowWidth;
    console.log(this.globalData);
  }
})