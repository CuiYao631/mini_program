// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    bgUrl:''
  },
  // 事件处理函数
  bindViewTap() {
    // wx.getUserProfile({
    //   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (res) => {
    //     console.log(res)
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // })

    wx.navigateTo({
      url: '../home/home'
    })
  },
  onLoad() {
    console.log("onLoad")
    wx.request({
      url: app.globalData.ServerUrl+"/homeImage",
      method: "POST",
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success:  (res)=>{
          this.setData({
            bgUrl:res.data.URL
          });
      }
  })
  }
})
