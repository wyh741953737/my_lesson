react(UI)+redux(数据流)+immutable(不可变数据)


let obj1={a:1,b:2,c:3};
let obj2=obj1;
obj2.b=4;
console.log(obj2);//{ a: 1, b: 4, c: 3 }
console.log(obj1);//{ a: 1, b: 4, c: 3 }


