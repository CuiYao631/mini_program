//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  
  globalData: {
    userInfo: null,
    //后台地址,所有请求都要先经过该后台统一管理，除微信自身请求
    ServerUrl:"https://www.xcuitech.com"
  },
  "navigateToMiniProgramAppIdList": [
         "wx940e37bc0f471016"
  ],
})
