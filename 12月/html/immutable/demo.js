// let obj1={a:1,b:2,c:3};
// let obj2=obj1;
// obj2.b=4;
// console.log(obj2);//{ a: 1, b: 4, c: 3 }
// console.log(obj1);//{ a: 1, b: 4, c: 3 }



// const Immutable=require('immutable');
// let obj1=Immutable.Map({a:1,b:2,c:3})  //prevState
// let obj2=obj1;//nextState
// obj2=obj2.set("b",4);
// console.log(obj2);  //Map { "a": 1, "b": 4, "c": 3 }
// console.log(obj1);  //Map { "a": 1, "b": 2, "c": 3 }
//生成新状态，并不影响老状态。传统引用式赋值不行，深拷贝浅拷贝来处理。让拷贝来做，不用太大阵仗。
//只是改其中的部分，immutable包负责处理这件事。immutable使用说明数据时，数据不可变。react性能优化的一部分



// var arr=['old',1,true,null,undefined];
// var new_arr=arr.concat();
// //或者var new_arr=arr.slice();
// new_arr[0]='new';
// //引用式赋值，未来不可预测，new_arr ,arr 任何一方修改，都会受到影响。不要用
// //immutable可以让你放心使用,未来可知。reducer是一个纯函数，
// //concat 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
// //slice concat实现拷贝是浅拷贝 返回新数组的少有的方法，slice，concat性能最好。
// console.log(new_arr); //[ 'new', 1, true, null, undefined ]
// console.log(arr);  // [ 'old', 1, true, null, undefined ]



// var arr=[{old:'old'},['old']];
// //嵌套是结构，浅拷贝搞不定的时候
// var new_arr=arr.slice();
// new_arr[0].old='new';
// new_arr[1][0]='new';
// console.log(new_arr);//[ { old: 'new' }, [ 'new' ] ]
// console.log(arr); //[ { old: 'new' }, [ 'new' ] ]
// //这个时候，不起作用了.浅拷贝更高效，仍然有他的应用场景。



// var arr=[{old:'old'},['old']];
// var new_arr=JSON.parse(JSON.stringify(arr));
// new_arr[0].old='new';
// new_arr[1][0]='new';
// console.log(new_arr);//[ { old: 'new' }, [ 'new' ] ]
// console.log(arr); //[{old:'old'},['old']]
// //JSON.stringify将对象变成字符串。深拷贝。


// var arr=[
//     function(){   console.log(a);},
//     { b: function(){ console.log(b)}  }
// ]
// var new_arr=JSON.parse(JSON.stringify(arr));
// console.log(new_arr);//[ null, {} ]
// console.log(arr);  //[ [Function], { b: [Function: b] } ]
//json 两个方法，对非函数子元素，可进行深拷贝，性能开销比浅拷贝略大。json弊病，使用慎重

//通用拷贝计算函数，json方案排除，一维浅拷贝有限制，递归。将复杂问题变成很多简单问题，使用回塑方式，将多维对象深拷贝变成n个一维的浅拷贝。性能开销大
//slice，concat有局限。 
var shallowCopy = function(obj) {
    if (typeof obj !== 'object') return ;   //判断是否是对象。对象都不是，return
    var newObj = obj instanceof Array ? [] : {}; //如果是数组返回[]或者JSON-object{}
    for (var key in obj) { //for key in 循环数组
      if (obj.hasOwnProperty(key)) { //不要一味地拷贝。如果是自身属性，拷贝过来，否则不要
        newObj[key] = obj[key];
      } }  
    return newObj;
  }
  var arr = ['old', 1, true,[1,2]];
  var new_arr = shallowCopy(arr);
  new_arr[3][1] = 6;
  console.log(new_arr);//[ 'old', 1, true, [ 1, 6 ] ]
  console.log(arr); //[ 'old', 1, true, [ 1, 6 ] ]

  

// var deepCopy = function(obj) {
//     if (typeof obj !== 'object') return ;
//     var newObj = obj instanceof Array ? [] : {};
//     for (var key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[key] =typeof obj[key]==="object" ? deepCopy(obj[key]):obj[key];递归，如果值是对象
//       }
//     }  
//    return newObj;
//   }  
//   var arr = ['old', 1, true, [2, 3]];
// var new_arr = deepCopy(arr);
// new_arr[3][0] = 4;
// console.log(new_arr);//[ 'old', 1, true, [ 4, 3 ] ]
// console.log(arr); //[ 'old', 1, true, [ 2, 3 ] ]
  

//深拷贝，浅拷贝都是拷贝，规避js 复杂对象类型引用式赋值，引用式赋值会让代码未来变得不可预测，不再单纯出现二义性。
//结合react，reducer 纯函数，引入immutable，来确保状态对象赋值狗是全新的对象，不会影响原对象。
//slice，concat，解决不了非数组，如果是数组，最直接，最原始的for key in 重新赋值。
//嵌套对象，浅拷贝解决不了，如果内部没有函数时，JSON.parse(JSON>Stringify()



var obj = {   //原数据，包含字符串、对象、函数、数组等不同的类型
  name:"test",
  main:{
      a:1,
      b:2
  },
  fn:function(){
      
  },
   friends:[1,2,3,[22,33]]
}

function copy(obj){
   let newobj = null;   //声明一个变量用来储存拷贝之后的内容
   
//判断数据类型是否是复杂类型，如果是则调用自己，再次循环，如果不是，直接赋值即可，
//由于null不可以循环但类型又是object，所以这个需要对null进行判断
   if(typeof(obj) == 'object' && obj !== null){ 
   
//声明一个变量用以储存拷贝出来的值,根据参数的具体数据类型声明不同的类型来储存
       newobj = obj instanceof Array? [] : {};   
       
//循环obj 中的每一项，如果里面还有复杂数据类型，则直接利用递归再次调用copy函数
       for(var i in obj){  
           newobj[i] = copy(obj[i])
       }
   }else{
       newobj = obj
   }    
 return newobj;    //函数必须有返回值，否则结构为undefined
}

var obj2 = copy(obj)
obj2.name = '修改成功'
obj2.main.a = 100
console.log(obj,obj2)


//0要拷贝的数据 obj 以参数的形式传参
// 1声明一个变量 来储存我们拷贝出来的内容
// 2判断 obj 是否是引用类型数据，如果不是，则直接赋值即可（ 可以利用 obj instanceof Type 来进行判断），
// 3由于用 instanceof 判断array 是否是object的时候，返回值为true, 所以我们在判断的时候，直接判断obj 是否是Array 就可避免这个问题
// 4根据判断的不同类型，再给之前的变量赋予不同的类型： [ ] : { }
// 5循环obj 中的每一项，如果里面还有复杂数据类型，则直接利用递归再次调用copy函数
// 6最后 将 这个变量 return 出来即可
//其他深拷贝方法：
//b = JSON.parse( JSON.stringify( a ) )
//不足：
//由于JSON.stringify()这个方法是先将文明要拷贝的数据线转换成字符串，来开辟一个新的地址用以储存新的数据，但是这个方法无法转化 function 和 undefined。





// 手写浅拷贝( 常见面试题之一 )
// 浅拷贝和深拷贝的区别：
// 浅拷贝 ： 只是将数据中所有的数据引用下来，依旧指向同一个存放地址，拷贝之后的数据修改之后，也会影响到原数据的中的对象数据

// 深拷贝： 将数据中所有的数据拷贝下来，对拷贝之后的数据进行修改不会影响到原数据


// 实现思路：
// 1将要拷贝的数据 obj 以参数的形式传参
// 2声明一个变量 （ 假如是 data ） 来储存我们拷贝出来的内容
// 3循环obj 中的每一项，判断 obj 上 有这一项
// 4将 obj 中的每一个 赋值 给data中的每一项
// 5最后 将 这个变量 return 出来即可
// var data = {
//   name:"test",  //一会要被拷贝的数据，包含字符串、对象、函数、数组
//   main:{
//       a:1,
//       b:2
//   },
//   fn:function(){
      
//   },
//   friends:[1,2,3,[22,33]]
// }

// function shallowCopy(obj){
//   var data = {};
//   for (var i in obj){
//       if(obj.hasOwnProperty(i)){  // for in  循环，也会循环原型链上的属性，所以这里需要判断一下
//       //hasOwnProperty的相关知识点，查看下面的：相关知识点补充
//           data[i] = obj[i]
//       }
//   }
//   return data
// }
// var obj2 = shallowCopy(data)
// obj2.name = '修改成功'    //由于name是基本数据类型，会开辟一个新的地址来储存我们拷贝的内容，所以原数据的name属性不会被修改
// obj2.main.a = 100    //   main是引用类型，浅拷贝会直接拷贝它的地址，所以原数据的这个值也会改变
// console.log(data,obj2)
// 其他浅拷贝的方式：
// ① 赋值运算

// *② 扩展运算符 …

// ③ Object.assign( target, …sources)
// target参数： 代表目标对象，assign方法会改变目标对象，所以一般target会设置一个空值
// …sources参数： 代表原对象，可以有多个，用， 逗号隔开
// 注意： 对于要合并的原对象中，要求键名唯一，如果有重复的，后者的键值会覆盖前者的键值
