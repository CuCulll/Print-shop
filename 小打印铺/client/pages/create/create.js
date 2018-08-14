// pages/create/create.js
var util = require('../../utils/util.js');
  Page({

    selection_change: function (e) {
      var option = this.data.option;
      var index = this.data.index;
      this.setData({
        index: e.detail.value
      })
      try {
        wx.setStorageSync('content', e.detail.value)
      } catch (e) {
        console.log("wrong22222")
      }
      console.log("什么啊啊" + option[index] + index +"     "+e.detail.value)
    },
    more: function(){
      var hidden = this.data.hidden
      if(hidden == true){
        this.setData({
          hidden: false
        })
      }else {
        this.setData({
          hidden: true
        })
      }
      console.log("click-canvas")
    },  
    num: function (e) {
      try{
        wx.setStorageSync('num', e.detail.value)
      }catch(e){
        console.log("wrong")
      }
      
      console.log("几份啊啊" + e.detail.value)
    },

    bingo: function (options) {
      wx.showModal({
        title: '是否确认提交',
        content: '提交成功后可到个人中心查看',
        success: function (res) {
          if (res.confirm) {
            wx.showLoading({
              title: '提交中...',
            })
            var user = getApp().globalData.userInfo
            try {
              var num = wx.getStorageSync('num')
              var index = wx.getStorageSync('content')
              console.log(price[index] + '*' + num)
            } catch (e) {
              console.log("bhzcdsbjhcx")
            }
            FileSystemManager.writeFile({
              filePath: './new',
              data: [user,index,num]
            })
            wx.uploadFile({
              url: 'https://sxnfa62l.qcloud.la',
              filePath: './new',
              name: user,
              success: function(res){
                wx.hideLoading(),
                wx.showToast({
                  title: '提交成功',
                  icon: 'success'
                })
              },
              fail: function(res){
                wx.showToast({
                  title: '提交失败，请稍后再试',
                })
              } 
            })
            wx.redirectTo({
              url: '../pay/pay',
            })
          } else if (res.cancel) {
            wx.navigateBack;
          }
        }
      })
    },

    /**
     * 页面的初始数据
     */
    data: {
      index: 0,
      option: [],
      hidden: true,
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      option: getApp().globalData.option
    })
    var context = wx.createCanvasContext('addme')
    context.setFontSize(30)
    context.fillText('QQ扫码发给我', 90,40)
    context.drawImage("./addme.png",90,50,200,200)
    context.draw()
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
