//获取应用实例
var app = getApp()

Page({
  data: {
    isAgree: false
  },
  onShow: function () {
   
  },

  onLoad: function () {

  },
   bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },

  //页面事件绑定部分
  bindViewTap: function () {
    wx.navigateTo({
      url:'../main/main'
    })
  } //跳转菜单页面 
})
