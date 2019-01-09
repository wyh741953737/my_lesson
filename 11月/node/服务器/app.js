const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const infos={
    "123":{
        username:'tangtang',
        sex:'man',
   },
   "456":{
       username:'Eileen',
       sex:'woman',
   }
}
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/rhino.png'){
        const png=fs.readFileSync('./rhino.png');
        res.statusCode=200;
        res.setHeader('content-Type','image/png');
        res.end(png);
        return;
    }
    if(req.url.indexOf('/getInfo')>=0){
        const qs=req.url.split('?')[1];
        console.log(qs);
        const params=querystring.parse(qs);
        console.log(params);
        const id=params.id;
        console.log(id);
        const info=infos[id] || {};
        res.statusCode=200;
        res.end(JSON.stringify(info));
        return;
           }
    const index=fs.readFileSync('./index.html','utf8');
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end(index);
});
server.listen(3000,'127.0.0.1',()=>{
console.log('服务器');
})