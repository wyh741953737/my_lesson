// 云函数入口文件
const cloud = require('wx-server-sdk')
const rq= require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
const isbn=event.isbn;
const res=rq("https://api.douban.com/v2/book/isbn/"+isbn).then(html=>{
  console.log(html)
return html
}).catch(err=>{
  console.log(err);
})
return res;
}