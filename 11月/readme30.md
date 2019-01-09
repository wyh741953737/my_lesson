有关this作用域，函数运行方向决定this指向
普通函数，对象方法，事件处理函数，在闭包中。
bind 改变this 指向 和call，applay作用差不多，
bind方法会创建一个新函数，绑定这个函数，该方法接受两个参数，第一个作为this，第二个作为函数参数
把类数组转换成数组 第一种方法是使用apply方法 第二种方法是使用call方法和bind方法一起使用
call，apply 区别是call 序列，apply 数组
手写bind
Function.prototype.bind=function
如果一个函数里面有一个内部func函数，在事件内部调用func函数时，func函数体内的this就指向了window，用call来修改this指向
  

