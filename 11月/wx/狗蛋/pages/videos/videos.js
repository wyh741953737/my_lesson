// pages/videos/videos.js
const util = require('../../utils/util.js')
const movieUrl = getApp().globalData.movieBase
Page({
  data: {
    swiperLists:[],
    isLoading:false,
    hasMore:true,
    article_id:0,
  movieList:null
  },

  onLoad: function (options) {
  this.initSwiper()
  this.getList('down');
  },
  openDetail(event) {
    let item = event.currentTarget.dataset.list
    let url = `./video_detail/video_detail?title=${item.title}&time=${encodeURIComponent(item.create_time)}&  url=${item.videos[0].video_src}`
    wx.navigateTo({
      url: url
    })
  },
  getList(type){
    this.setData({
      isLoading: true,
      hasMore: true
    })
    type === 'down' ? this.setData({ article_id: 0 }) : null;
    util.$get(`${movieUrl}/api/v2/article`, { app_id: 6, cid: 4, article_id: this.data.article_id }).then(res => {
      if (res.data.status === 0) {
        this.processData(type, res.data.data.articles)
      }
    }).catch(e => {
      this.setData({
        isLoading: true,
        hasMore: false
      })
      wx.stopPullDownRefresh()
      wx.showToast({ title: `网络错误!`, duration: 1000, icon: "none" })
    })

  },
  processData(type, list) {
    if (list.length) {
      list.map(v => { // 转换一下时间
        v.create_time = util.formatTime(new Date(), 'yyyy-MM-dd')
      })
      if (type === 'up') { // 上拉处理
        this.setData({
          movieList: this.data.movieList.concat(list)//concat连接起来
        })
      } else { // 下拉出来
        this.setData({
          movieList: list
        })
        wx.stopPullDownRefresh()
      }
      this.setData({
        article_id: ++this.data.article_id,
        isLoading: false,
        hasMore: true
      })
    } else {
      if (type === 'down') {
        wx.showToast({ title: `没有数据`, duration: 1500, icon: "none" })
        this.setData({
          isLoading: false,
          hasMore: false
        })
      } else {
        this.setData({
          isLoading: false,
          hasMore: true
        })
      }
    }

  },
initSwiper(){
  util.$get(`${movieUrl}/api/v2/article`, { app_id: 6, cid: 4, article_id: 0 }).then(res => {
    if (res.data.status === 0) {
      let swiperList = res.data.data.articles.map(v => {
        return { // 转换一下时间
          create_time: v.create_time = util.formatTime(new Date(v.create_time), 'yyyy-MM-dd'),
          article_id: v.article_id,
          title: v.title,
          content: v.content,
          video_src: v.videos[0].video_src,
          thumbnails: v.thumbnails[0].url
        }
      })
      this.setData({
        swiperList,
       
      })
    }
  }).catch(e => {
    wx.showToast({ title: `网络错误!`, duration: 1000, icon: "none" })
  })
},
  
  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },
  onUnload: function () {

  },

  onPullDownRefresh: function () {
    this.getList('down')
    this.initSwiper()
  },

  onReachBottom: function () {
    if (this.data.isLoading) { // 防止数据还没回来再次触发加载
      return;
    }
    this.getList('up')
  },

  
  onShareAppMessage: function () {

  }
})