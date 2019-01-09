//启动中间件h函数，异步，传递一个函数作为参数，得到访问上下文环境参数ctx
const Koa=require('koa');
const app=new Koa();
const fs=require('fs.promise');
const main= async function(ctx,next){
 ctx.response.type='html';
 ctx.response.body=await fs.readFileSync('./template.html','utf8');
};
app.use(main);
app.listen(3029);