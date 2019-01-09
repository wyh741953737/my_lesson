// 云函数入口文件
const AppId ="	wxe0078146d68e1ca2";
const SecretId ="AKIDz75sTtqA2jFall7cMwNdImiYP5a2qZZR";
const SecretKey ="yZ3QftwpXAdwGOM8vXyGN6e2FLH2c9Xn";
const cloud = require('wx-server-sdk');
const fs=require('fs');//fs 
const path=require('path');
const {ImageClient}=require('image-node-sdk')
cloud.init()
let ImageClient=new ImageClient({AppId,SecretId,SecretKey});
// 云函数入口函数
exports.main = async (event, context) => {
return await ImageClient.imgPornDetect({
  fromData:{
    //node文件系统 fs rwd+，path提供路径对象，path.join方法
    image:fs.createReadStream(path.join(_dirname,'./test.png'))
  },
  headers:{
    'content-type':'multipart/form-data'
  }
})
}