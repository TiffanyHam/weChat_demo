//获取应用实例
var app = getApp()

Page({
  data: {
    isAgree: false,
    userName: '',
    userPassword: '',
  },
  formSubmit: function(e) {
    console.log(e.detail.value); //格式 Object {userName: "user", userPassword: "password"}
    var objData = e.detail.value; //获取表单数据

    if (objData.userName && objData.userPassword) {

      //同步方式存储表单数据
      // wx.setStorageSync("userName", objData.userName);
      //wx.setStorageSync("userPassword", objData.userPassword);

      wx.setStorage({
        key: 'userName',
        data: objData.userName,
      })
      wx.setStorage({
        key: 'userPassword',
        data: objData.userPassword,
      })
      //跳转到成功页面
      wx.navigateTo({
        url: '../main/main',
      })

    }

  },

  //加载完后，处理事件
  //如果有本地数据，则直接显示
  onLoad: function() {
    var that = this;
    //获取本地数据
    wx.getStorage({
      key: 'userName',
      success: function(res) {
        console.log(res.data);
        that.setData({
          userName: res.data
        });
      },
    });

    wx.getStorage({
      key: 'userPassword',
      success: function(res) {
        console.log(res.data);
        that.setData({
          userPassword: res.data
        });
      },
    });
    /*  
     var userName = wx.getStorageSync('userName');
     var userPassword = wx.getStorageSync('userPassword');

     console.log(userName)
     console.log(userPassword)

    if (userName) {
       this.setData({
         userName: userName
       });
     }
     if (userPassword) {
       this.setData({
         userPassword: userPassword
       });
     }
     */

  },
  onReady: function() {
    //页面渲染完成
  },
  onShow: function() {
    //页面显示
  },
  onHide: function() {
    //页面隐藏
  },
  onUnload: function() {
    //页面关闭
  },
  bindAgreeChange: function(e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },

})