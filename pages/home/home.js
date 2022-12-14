//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'配网',
        //url:'wificonfig/wificonfig',
        // isSplot:true,
        target:"miniProgram",
        opentype:"navigate",
        appid:"wx940e37bc0f471016",
        path: '',
        version: 'release',// 打开正式版
      },
      {
        name:'工具',
        url:'Tool/list/list',
        //isSplot:true,
      },
      {
        name:'文章',
        url:'out',
       // isSplot:true
      },
      {
        name:'壁纸',
        url:'wallpaper/list/list',
       // isSplot:true
      },
      {
        name:'...',
        url:'bill',
       // isSplot:true
      },
      {
        name:'...',
        url:'bill'
      },
      {
        name:'...',
        url:'bill',
       // isSplot:true
      },
      {
        name:'...',
        url:'bill',
        //isSplot:true
      },
      {
        name:'...',
        url:'bill',
       // isSplot:true
      },
    ]
  },
  onLoad: function () {
    const _this = this;
    // 拼接请求url
    const url = app.globalData.ServerUrl+'/home';
    // 请求数据
    wx.request({
      url: url,
      method:"post",
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success:function(res) {
        console.log(res.data);
        _this.setData({
          imgUrls: res.data,
        })
      }
    })
  }
    
})
