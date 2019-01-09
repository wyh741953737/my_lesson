middleware:中间件
输出接口：createStore，combineReducers，bindActionCreators, applyMiddleware, compose五个接口
Redux里我们都知道dispatch一个action,就会到达reducer，而middleware就是允许我们在dispatch action之后，到达reducer之前，搞点事情。
而 applyMiddleware 函数的作用就是对 store.dispatch 方法进行增强和改造，使得在发出 Action 和执行 Reducer 之间添加其他功能。setTimeout。订阅发布模式（监听）异步。
比如：打印，报错，跟异步API通信等等
applyMiddleware方法主要是对redux的dispacth方法进行封装
applyMiddleware 这个函数其实是一个 柯里化 的函数，
柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
并且返回接受余下的参数且返回结果的新函数的技术
function count(a,b,c) {
    return a+b+c;
}
count(1,2,3);

我们看到 count接受多个参数，最后返回了计算结果，接下来把它柯里化
function count(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}
count(1)(2)(3);




redux-devtools是侵入式的，是开发环境下开发redux一个强大的开发工具。它使用monitor实时监听您的store。需要安装模块。 
如果你不想安装任何模块，侵入你的项目里。Redux DevTools Extension是个很好的选择，它支持chrome，Firefox以及360浏览器,它提供了大部分常用的监听器去配置你的项目，不需要安装任何模块（其实有安装选项）