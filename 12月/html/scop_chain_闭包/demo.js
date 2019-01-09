//第一句执行前，生成全局globalContext

//1,全局·执行上下文，全局执行上下文压入执行上下文栈
//2，全局执行上下文初始化

var scope="global scope";
//3，创建函数执行上下文，checkscope
//4，函数被运行后，this，创建变量，作用域链
function checkscope(){
    var scope='local scope';
    //5，checkscope函数执行完毕，checkscope执行上下文栈中弹出
//6,执行f函数，创建了f函数执行上下文，f函数执行上下文栈被压入执行上下文
//7，f 执行上下文变量，作用域链this
//f 创建作用域链时，作用域scope保持了对checkscope 函数作用域的引用

   function f() {
        return scope;
    }
    return f;
}
var foo=checkscope();
console.log(foo());
fContext={
    //AO:Active object    VO:Variable Object
      Scope:[AO,checkscope.AO,globalContext.VO]
  }
  checkscopeContext={
    Scope:[AO,globalContext.VO]
  }
