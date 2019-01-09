function Person(name){
    this.names=['ken','eia']
    
}
function Child(){
    Person.call(this);
}
var child1=new Child();
child1.names.push('yuyu');
console.log(child1.names);
child2.names.push('qqq');
var child2=new Child();
console.log(child2.names);