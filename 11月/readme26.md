手写promise A+ 规范

js 回调解决了异步问题 出现倒金字塔式回调地狱

ECMA2015推出Promise A+ 规范

Promise本质是一个类解决了异步，then catch all接受构造函数，resolve reject钩子函数
返回的是一个promise实例 实例上有一个then 方法确保顺序
高阶函数回调
b发生在.then之前

resolve



 display:flex;//伸缩容器

  flex-direction:row;//横向排列

  flex-wrap:wrap;//wrap：flex容器为多行。就是换行的意思

 justify-content:center;//居中不留空白

 js本身没有类，只有对象
 Object

狗继承动物。
1，使用call或者apply，把父对象的构造函数挂到子对象上　Animal.apply(this, arguments);person.call（this）
2，prototype  狗的prototype属性，指向animal 对象
3，直接继承prototype，直接继承Animal.prototype。dog.prototype = Animal.prototype;
4，利用空对象作为中介，var F = function(){};
5，拷贝继承
继承三部曲
-父类构造函数执行一下，相当于super（）
-prototype属性指向父类实例
-将prototype.constructor指向构造函数

每个函数都有prototype属性,该属性只属于函数   __proto__函数或方法都有私有属性

一个对象A的__proto__属性指向的那个对象B,B就是A的原型对象（父对象），A拿到B里所有属性和方法，也可以拿到B的远行对象C上的属性和方法，一次递归

构造函数 new fn（）  {} <=this
构造函数 prototype 属性，方法  对象沿着原型链去查找方法
构造函数和原型链有关系
parent.protype.constructor


typeof其实复杂数据类型只有function和object是原生支持的，其他都是变种
function VS Object
一等对象，js才是真正的面向对象
函数可以被执行，可以当做object的构造函数



this用法
this永远和函数运行方式有关



 call 
 原型链prototype
 继承
