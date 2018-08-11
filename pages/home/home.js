
const swipers = require('../../datas/swiper.js');  //commonJs
import courses from '../../datas/course.js';  //ES6 
import videos from "../../datas/videos.js";
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips1:{
      content:"热门课程",
      img_url:"/images/热门.png"
    },
    tips2 :{
      content:"更多",
      img_url:"/images/列表箭头.png"
    },
    tips3:{
      content:"推荐视频",
      img_url:"/images/视频.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      swipers,
      courses,
      videos

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  more(e){
    // console.log(e)
    wx.switchTab({
      url: '/pages/course/course'
    })
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