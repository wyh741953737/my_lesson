Function.prototype.bind2 = function(context) {
    // console.log('bind2');
    // 1. 返回被绑的函数
    // 2. 新函数在运行的时候， this指向context
    // 调用bind2的函数foo? 
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      // this
      var bindArgs = Array.prototype.slice.call(arguments);
      self.apply(context, args.concat(bindArgs));
    }
  }
  var obj = {
    val: 1
  }
  const foo = function(name, age) {
    console.log(this.val);
    console.log(name);
    console.log(age);
  }
  const fooBar = foo.bind2(obj, 'daisy');
  fooBar(18);  //函数名 函数体