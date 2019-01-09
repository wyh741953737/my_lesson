// 云函数入口文件
const cloud = require('wx-server-sdk')
const querystring = require('querystring')
const request=require('request')
cloud.init()

// 云函数入口函数
      exports.main = async (event, context) => {
      let {code}=event;
      console.log(code);
        let id ='	wxe0078146d68e1ca2';
        let secretKey ='yZ3QftwpXAdwGOM8vXyGN6e2FLH2c9Xn';
      const data={
        appid: id,
        secret:secretKey,
        js_code:code,
        grant_type:'authorization_code'
      }
        let url = `http://api.weixin.qq.com/sns/jscode2session?${querystring.stringify(data)}`
      console.log(url);
      return new Promise((resolve,reject)=>{
        request.get(url,(error,response,body)=>{
      if(error||response.statusCode!==200){
        reject(error)
      }else{
      try{
        console.log(body)
      const r=JSON.parse(body);
      resolve(r);
      }catch(e){
        reject(e)
      }
      }
      
      });
      })
      }