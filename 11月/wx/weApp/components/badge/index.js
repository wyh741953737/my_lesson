// components/badge/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['wux-class-badge'],
  properties: {
    count: {
      type: Number,
      value: 0,
      observer(newVal) {
        console.log(newVal);
        const { overflowCount } = this.data
        const finalCount = newVal >= overflowCount ? `${overflowCount}+` : newVal
        this.setData({
          finalCount
        })
      }
    },
    overflowCount: {
      type: Number,
      value: 99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // count外来
    // overflowCount外来
    // 组件内显示的数量
    finalCount: 0
    // ?内部数据 
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})