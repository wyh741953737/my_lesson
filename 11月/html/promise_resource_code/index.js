const Promise = require('./promise.js');
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('定时器执行了')
    resolve('aaaa')
  }, 2000)
  
})
p
  .then(data => {
    console.log(data);
  }, err => {
    console.error(err);
  })
 