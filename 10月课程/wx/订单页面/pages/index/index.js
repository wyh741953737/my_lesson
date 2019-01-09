// 全部订单页

//获取应用实例
var app = getApp()
Page({
  /*** 页面的初始数据 */
  data: {
    // 选项卡
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    // 商品内容数据
    carts: [
      { imgurl: '../../img/wallet-1.png', type1: '【老酒特卖】45℃老白汾十年陈酿500ML(2008-2009)', type2: '清香型', price: 100, num: 1 },
      { imgurl: '../../img/wallet-1.png', type1: '【老酒特卖】45℃老白汾十年陈酿500ML(2008-2009)', type2: '清香型', price: 100, num: 1 },
      { imgurl: '../../img/wallet-1.png', type1: '【老酒特卖】45℃老白汾十年陈酿500ML(2008-2009)', type2: '清香型', price: 100, num: 1 },
      { imgurl: '../../img/wallet-1.png', type1: '【老酒特卖】45℃老白汾十年陈酿500ML(2008-2009)', type2: '清香型', price: 100, num: 1 },
    ],
  },
  /** * 滑动切换tab  */
  bindChange: function (e) {
   c
    that.setData({ currentTab: e.detail.current });
  },
  /** * 点击tab切换  */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /*** 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    var that = this;
    /** * 获取系统信息  */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
  },
  /*** 生命周期函数--监听页面显示*/
  onShow: function () {
    if (app.globalData.currentLocation == '') {
      this.setData({
        currentTab: 0
      });
    } else {
      var i = app.globalData.currentLocation;
      this.setData({
        currentTab: i
      });
    }
  }
})
