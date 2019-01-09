Array.prototype.forEach2 = function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('参数必需为函数');
    }
  }
  const arr = new Array(1,2,3);
  arr.forEach2('abc');