// components/component-course.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courses:{
      type:Object
    }
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
    clickCourse(e) {
      if (e.currentTarget.dataset.isFull) return;
      // console.log(e.currentTarget.dataset.id)
      // console.log(e.target.dataset.id)      
      this.triggerEvent('tapCourses', {
        title: e.currentTarget.dataset.title,
        id: e.currentTarget.dataset.id
      })
      
    },
  }
})
