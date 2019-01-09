由于浏览器安全限制,数据是不可以直接跨域
jsonp的实现核心就是利用script标签的跨域能力
jsonp的核心原理就是目标页面回调本地页面的方法,并带入参数
jsonp是使用方法回调的原理.
在网页里,你如果引入其他网页的js,那这个页面的js是可以调用你网页的代码的
https://www.cnblogs.com/chiangchou/p/jsonp.html
<body>
 <script src='http://libs.baidu.com/jquery/2.0.0/jquery.min.js'></script>
 <script type="text/javascript">
 var s = document.createElement('script');
 s.src = 'http://localhost:8080/a.json';
 document.body.appendChild(s);
</script>
</body>

报错  原因是因为json数据并不是合法的js语句，把上面的json数据放在一个回调函数中是最简单的方法：
<body>
 <script src='http://libs.baidu.com/jquery/2.0.0/jquery.min.js'></script>
 <script type="text/javascript">
 function jsonpcallback(json) {
  console.log(json);
 }
 var s = document.createElement('script');
 s.src = 'http://localhost:8080/a.json';
 document.body.appendChild(s);
 </script>
</body> 
jsonpcallback({
 "name": "hanzichi",
 "age": 10
});




动态创建script标记。script中src不受域限制

//在header里设置‘access-Control-allow-origin'
ajax({
    url:'',
    type:'GET'
    dataType:'json',
  success: function(res) { console.log(res);   },
  error:function(res){console.log(res);    }
})
//回调函数，也可以自定义callback名称
ajax({
    url:'',
    type:'GET'
    dataType:'jsonp',
    jsonp:'callback',
    jsonpcallback:'calback123',
     success: function(res) { console.log(res);   },
     error:function(res){console.log(res);    }
})
