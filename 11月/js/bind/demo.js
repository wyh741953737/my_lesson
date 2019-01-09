var foo={
    value:1
    
}
var obj={
    value:2
}
function bar(name,age){
    console.log(this.value);
}
var bindObj=bar.bind(obj);
//bind绑定，生成一个新函数，bind 来改变 this 指向，那样做和 call/apply 没什么区别，只是一个延迟执行
var bindFoo=bar.bind(foo);
bindFoo();//新生函数可以异步执行
bar.call(obj);
console.log(typeof obj);
console.log(typeof foo);