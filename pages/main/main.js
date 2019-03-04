//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    griddata: [{
      name: '运单查询',
      img: '../../static/images/main/img_01.png',
      url: 'waybillQuery'
    }, {
      name: '飞机号查询',
      img: '../../static/images/main/img_02.png',
      url: 'airnumQuery'
    }, {
      name: '航班号查询',
      img: '../../static/images/main/img_03.png',
      url: 'flightQuery'
    }, {
      name: '无运单订舱',
      img: '../../static/images/main/img_04.png',
      url: 'nonbill'
    }, {
      name: '舱位批复',
      img: '../../static/images/main/img_05.png',
      url: 'approvalShip'
    }, {
      name: '批舱查询',
      img: '../../static/images/main/img_06.png',
      url: 'batchQuery'
    }, {
      name: '运单录入',
      img: '../../static/images/main/img_07.png',
      url: 'billEntry'
    }, {
      name: '账号管理',
      img: '../../static/images/main/img_08.png',
      url: 'acountManage'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})