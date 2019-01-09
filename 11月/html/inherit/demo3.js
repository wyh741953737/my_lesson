function Parent(name){
    this.name=name;
    this.colors=['red','green','pink'];
}
Parent.prototype.getName=function(){
    console.log(this.name);

}
function Child(name,age){
Parent.call(this,name);//==super()
this.age=age;
}
Child.prototype=new Parent();
Child.prototype.constructor=Child;
Child.prototype.sayHello=function()
{
    console.log(`Hi ${this.name},i am ${this.age},`);
}
var child1=new Child('ken','12');
child1.colors.push('black');
child1.getName();
child1.sayHello();
console.log(Child.prototype.constructor);