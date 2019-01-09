function Person(name){
    this.name=name;
}
let p=new Person('张三');
console.log(typeof Person);//function
console.log(typeof p);//object

console.log(Person.prototype);//Person{}
console.log(p.prototype);//undefined
console.log(Person.prototype.constructor===Person);//true
console.log(Person.__proto__);//[Function]
console.log(p.__proto__);//Person{}