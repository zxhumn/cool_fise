// components/settings/settings.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    settings:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickSettings(e){
      if (!e.currentTarget.dataset.navigateTo) return
      // console.log(e.currentTarget.dataset.navigateTo)
      wx.navigateTo({
        url: e.currentTarget.dataset.navigateTo ,
      })
    }
  }
})
