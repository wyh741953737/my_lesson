npm init -y
yarn add koa
新一代node开发框架
启动web server
http server 3000


koa-static 现成开源代码，提高开发效率  处理静态文件。
const server=require('koa=-server')

koa-router中间件路由。
const router=require('router');
router.get('/',(ctx,next)=>{})

mongoose处理mongodb 
mongose.connect('mongodb://localhost/test',{useUrlParser:true},()=>{})