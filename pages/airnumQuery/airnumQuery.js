var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2019-02-01",
    date1: "2019-02-01",
  },
  bindDateChange: function (e) {
    debugger

    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    debugger
    this.setData({
      date1: e.detail.value
    })
  },
  //页面事件绑定部分
  bindViewTap: function () {
    wx.navigateTo({
      url: '../airResult/airResult'
    })
  }, //跳转菜单页面 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})