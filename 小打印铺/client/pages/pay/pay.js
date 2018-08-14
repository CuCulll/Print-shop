// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var total = this.data.total
    var price = getApp().globalData.price
    try{
      var num = wx.getStorageSync('num')
      var index = wx.getStorageSync('content')
      console.log(price[index]+ '*' +num)
    }catch(e){
      console.log("bhzcdsbjhcx")
    }
    this.setData({
      total: price[index] * num
    })
    
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