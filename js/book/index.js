'use strict';//严格模式
var Book=function(isbn,title,author)
{//构造函数 constructor
    //isbn有一定规则
    if(isbn===undefined)
    throw new Error('Book constructor requires an isbn');
    console.log(this);
    if(!this.checkIsbn(isbn))
    throw new Error('Book:invalid ISBN.');    
    this.isbn=isbn;
    this.title=title ||'No title Specified';//
    this.author=author ||'No author Specified';
}
Book.prototype={
checkIsbn:function(isbn)
{
    if(isbn===undefined||typeof isbn !=='string')
    {     return false;}
    if(isbn.length!=10 && isbn.length!=13)  
    {      return false;  }
    if(isbn.indexOf('x')==-1)
    {        return false;    }
 return true;
},
getIsbn:function()
{
    return this.isbn;
},
setIsbn:function()
{
    console.log('无权限');
},
getTitle:function()
{
    return this.title;
},
setTitle:function(title)
{
    return this.title;
},
getAuthor:function()
{
    return this.author;
},
setAuthor:function(author)
{
    return this.author;
},
}
//函数的执行方式决定this指向，
//执行方式：1：作为普通函数运行，this指向全局，浏览器window，后端global，当启用严格模式后，undefined
        // 2:作为对象的方法被调用时
        
let book= new Book('1222x23456');
console.log(book.isbn,book.title,book.author);
console.log(book instanceof Book);
book.setTitle('ABC');
book.setAuthor=('aaa');
console.log(book.isbn,book.title,book.author);