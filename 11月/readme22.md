链式调用chain  非常优雅
将方法面向对象化（prototype）
每个函数做完功能后return this
用类统一，最开始返回对象
$('div')返回JQuery（fn）对象
JQuery.prototype={
    methods：return this
}

_ 就是lodash 常用工具库   做数组的方法 先chainable 即 _.chain静态方法 是lodash命名空间 $是JQuery

vue+lodash
chain给我们链式调用的能力

map

