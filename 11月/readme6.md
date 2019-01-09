多个promise对象，如何只用一条then链，解决异步问题，让代码同步运行

new promise（（resolve，reject）=>{
    异步执行的代码，resolve，reject
    resolve（123）
}）
每个Promise对象都是可以thenable的
在 then的函数里
then（res=>res.json（））
res.json也是一个promise
显示的返回yigeproise对象，继续执行下去
不如await优秀



Js的执行环境是"单线程"（single thread）好处:实现起来比较简单，执行环境相对单纯；坏处:耗时长
异步模式:每一个任务有一个或多个回调函数（callback）
异步模式"编程的4种方法:
一·callback回调函数
如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数
function f1(callback){

　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　callback();

　　　　}, 1000);

　　}
回调函数的优点:简单、容易理解和部署.缺点:不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。
二、事件监听
采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
为f1绑定一个事件（这里采用的jQuery的写法）。
　　f1.on('done', f2);  //当f1发生done事件，就执行f2。
然后，对f1进行改写：
　　function f1(){
　　　　setTimeout(function () {
　　　　　　// f1的任务代码
　　　　　　f1.trigger('done');
　　　　}, 1000);
　　}
f1.trigger('done')表示，执行完成后，立即触发done事件，从而开始执行f2。
优点:易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。
三、发布/订阅
我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。

这个模式有多种实现，下面采用的是Ben Alman的Tiny Pub/Sub，这是jQuery的一个插件。

首先，f2向"信号中心"jQuery订阅"done"信号。

　　jQuery.subscribe("done", f2);

然后，f1进行如下改写：

　　function f1(){

　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　jQuery.publish("done");

　　　　}, 1000);

　　}

jQuery.publish("done")的意思是，f1执行完成后，向"信号中心"jQuery发布"done"信号，从而引发f2的执行。

此外，f2完成执行后，也可以取消订阅（unsubscribe）。

　　jQuery.unsubscribe("done", f2);

这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。
四、Promises对象

每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。比如，f1的回调函数f2,可以写成：

　　f1().then(f2);

f1要进行如下改写（这里使用的是jQuery的实现）：

　　function f1(){

　　　　var dfd = $.Deferred();

　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　dfd.resolve();

　　　　}, 500);

　　　　return dfd.promise;

　　}

这样写的优点在于，回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。

比如，指定多个回调函数：

　　f1().then(f2).then(f3);

再比如，指定发生错误时的回调函数：

　　f1().then(f2).fail(f3);

而且，它还有一个前面三种方法都没有的好处：如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。这种方法的缺点就是编写和理解，都相对比较难。




Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口





数据存储方式
前端HTML5几种存储方式
h5之前，存储主要是用cookies。cookies缺点有在请求头上带着数据，大小是4k之内。主Domain污染。
主要应用：购物车、客户登录
1.本地存储localstorage
存储方式：
以键值对(Key-Value)的方式存储，永久存储，永不失效，除非手动删除。
大小：每个域名5M
存储结构简单的数据，复杂，结合 JSON.stringify()
JSIN.parse() 2-6M之间
中奖次数和奖品，不用去后端取


IndexedDB
索引数据库 (IndexedDB) API（作为 HTML5 的一部分）对创建具有丰富本地存储数据的数据密集型的离线 HTML5 Web 应用程序很有用。同时它还有助于本地缓存数据，使传统在线 Web 应用程序（比如移动 Web 应用程序）能够更快地运行和响应。



Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。Cookie 主要用来分辨两个请求是否来自同一个浏览器，以及用来保存一些状态信息。它的常用场合有以下一些。
对话（session）管理：保存登录、购物车等需要记录的信息。
个性化：保存用户的偏好，比如网页的字体大小、背景色等等。
追踪：记录和分析用户行为。





XMLHttpRequest是一个浏览器接口，使得Javascript可以进行HTTP(S)通信。
首先，新建一个XMLHttpRequest的实例。
　　var xhr = new XMLHttpRequest();
然后，向远程主机发出一个HTTP请求。
　　xhr.open('GET', 'example.php');
　　xhr.send();
接着，就等待远程主机做出回应。这时需要监控XMLHttpRequest对象的状态变化，指定回调函数。
　　xhr.onreadystatechange = function(){
　　　　if ( xhr.readyState == 4 && xhr.status == 200 ) {
　　　　　　alert( xhr.responseText );
　　　　} else {
    　　　　　　alert( xhr.statusText );
　　　　}　　};
老版本的XMLHttpRequest对象有以下几个缺点：
　　* 只支持文本数据的传送，无法用来读取和上传二进制文件。
　　* 传送和接收数据时，没有进度信息，只能提示有没有完成。
　　* 受到"同域限制"（Same Origin Policy），只能向同一域名的服务器请求数据。

新版本的XMLHttpRequest对象，针对老版本的缺点，做出了大幅改进。

　　* 可以设置HTTP请求的时限。

　　* 可以使用FormData对象管理表单数据。

　　* 可以上传文件。

　　* 可以请求不同域名下的数据（跨域请求）。

　　* 可以获取服务器端的二进制数据。

　　* 可以获得数据传输的进度信息。








1 打开数据库
使用 IndexedDB 的第一步是打开数据库，使用indexedDB.open()方法。
var request = window.indexedDB.open(databaseName, version);
如 const request=window.indexDB.open('kft',1);
（1）error事件表示打开数据库失败。
request.onerror = function (event) {
  console.log('数据库打开报错');
};
（2）success 事件表成功打开数据库。
var db;
request.onsuccess = function (event) {
  db = request.result;
  console.log('数据库打开成功');
};
这时，通过request对象的result属性拿到数据库对象。
（3）upgradeneeded 事件
如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded。
var db;
request.onupgradeneeded = function (event) {
  db = event.target.result;
}
这时通过事件对象的target.result属性，拿到数据库实例。



2 新建数据库
新建数据库与打开数据库是同一个操作。如果指定的数据库不存在，就会新建。不同之处在于，后续的操作主要在upgradeneeded事件的监听函数里面完成，因为这时版本从无到有，所以会触发这个事件。

通常，新建数据库以后，第一件事是新建对象仓库（即新建表）。


