// isbn title author 
// public 有问题`
// 私有化
// 立即执行函数
var Book = (function() {
    // 闭包 
    var numOfBooks = 0;
    return function(newIsbn, newTitle, newAuthor) {
      // 局部作用域内的变量
      console.log(newIsbn, newTitle, newAuthor, numOfBooks);
      var isbn, title, author;
      //public  
      checkIsbn=function(isbn)
      {
          if(!isbn||typeof isbn !=='string')
          {
              throw new error('isbn有误');

          }
      }
      this.setTitle = function(newTitle) {
        title = newTitle || 'No Title specified';
      }
  
      this.getTitle = function() {
        return title;
      }
      this.setIsbn = function(newIsbn) {
        if(checkIsbn(newIsbn))
        isbn=newIsbn;
      }
  
      this.getIsbn = function() {
        return Isbn;
      }
      
  this.setIsbn(newIsbn);
      this.setTitle(newTitle);
      numOfBooks++;
      this.getNumOfBooks = function() {
        return numOfBooks;
      }
      console.log(`创建了${numOfBooks}本书`);
      //constructor
    }
  })();
  Book.prototype={
      display:function()
      {
          console.log('这本书书名是${this.getTitle()},作者是${this.getAuthor()}');
      }
  }
  //var book = new Book('123', '飞鸟集', '泰戈尔');
  //var book2 = new Book('123', 'HTML6高级程序设计', '聂尧');
  //console.log(book.getTitle());
  // book.title
