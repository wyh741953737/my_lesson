面试题：
    箭头函数this的指向？
      1、箭头函数的this绑定看的是this所在函数定义在哪个对象下，就绑定哪个对象
      2、如果有嵌套的情况，则this绑定到最近的一层对象上

箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种只包含一个表达式，连{ ... }和return都省略掉了。还有一种可以包含多条语句，这时候就不能省略{ ... }和return：

如果参数不是一个，就需要用括号()括起来：
// 两个参数:
// 无参数:

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错：
x => { foo: x }    // SyntaxError:
因为和函数体的{ ... }有语法冲突，所以要改为：
x => ({ foo: x })   // ok:
//加括号的函数体返回对象字面表达式

//支持剩余参数和默认参数
(参数1, 参数2, ...rest) => {函数声明}
(参数1 = 默认值1,参数2, …, 参数N = 默认值N) => {函数声明}

//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明}


this
箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
现在，箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj：

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
obj.getAge(); // 25

由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：
var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:2000}, year);
    }
};
obj.getAge(2015); // 25


箭头函数表达式的语法比函数表达式更短，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数
引入箭头函数有两个方面的作用：更简短的函数并且不绑定this。

在箭头函数出现之前，每个新定义的函数都有它自己的 this值（在构造函数的情况下是一个新对象，在严格模式的函数调用中为 undefined，如果该函数被作为“对象方法”调用则为基础对象等

使用 new 操作符节
箭头函数不能用作构造器，和 new一起用会抛出错误。

var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
使用prototype属性节
箭头函数没有prototype属性。

var Foo = () => {};
console.log(Foo.prototype); // undefined
使用 yield 关键字节
 yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作生成器。

箭头函数内定义的变量及其作用域

// 常规写法
var greeting = () => {
    let now = new Date();    //用let
     return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));
     }
greeting();          //"Good day."
console.log(now);    // ReferenceError: now is not defined 标准的let作用域

// 参数括号内定义的变量是局部变量（默认参数）
var greeting = (now=new Date()) => "Good" + (now.getHours() > 17 ? " evening." : " day.");
greeting();          //"Good day."
console.log(now);    // ReferenceError: now is not defined

// 对比：函数体内{}不使用var定义的变量是全局变量
var greeting = () => {
    now = new Date(); 
    return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting();           //"Good day."
console.log(now);     // Fri Dec 22 2017 10:01:00 GMT+0800 (中国标准时间)

// 对比：函数体内{} 用var定义的变量是局部变量
var greeting = () => {
    var now = new Date();
     return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting(); //"Good day."
console.log(now);    // ReferenceError: now is not defined
 

箭头函数也可以使用闭包：
// 标准的闭包函数
function A(){
      var i=0;
      return function b(){
              return (++i);
      };
};
var v=A();
v();    //1
v();    //2

//箭头函数体的闭包（ i=0 是默认参数）
var Add = (i=0) => {return (() => (++i) )};
var v = Add();
v();           //1
v();           //2

//因为仅有一个返回，return 及括号（）也可以省略
var Add = (i=0)=> ()=> (++i);
 

 箭头函数递归
var fact = (x) => ( x==0 ?  1 : x*fact(x-1) );
fact(5);       // 120


<script>
 var obj = {
   say: function () {
     setTimeout(function () {
       console.log(this) //结果是: window
     });
   }
 }
 obj.say();
</script>

匿名函数,定时器中的函数,由于没有默认的宿主对象,所以默认this指向window

问题: 如果想要在setTimeout/setInterval中使用这个对象的this引用呢?
用一个 变量提前把正确的 this引用保存 起来, 我们通常使用that = this, 或者 _this = this来保存我们需要的this指针!

<script>
  var obj = {
    func: function() {},
    say: function () {
      var that = this;   //此时的this就是obj对象
      console.log(this);    //obj   func:f    say:f
      setTimeout(function () {
        console.log(this)//window
        that.func()
      });
    }
  }
  obj.say();
 </script>
我们也可以使用 func.bind(this) 给回调函数直接绑定宿主对象, bind绑定宿主对象后依然返回这个函数, 这是更优雅的做法
<script>  
  var obj = {  
    func: function() {},  
    say: function () {  
       // 此时的this就是obj对象  
      setTimeout(function () {  
        console.log(this)  
        this.func()  
      }.bind(this));  
    }  
  }  
  obj.say(); // obj  
</script>  