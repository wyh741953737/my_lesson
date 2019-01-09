1，JS有哪些手段可以实现继承？
3，用纯JS实现，点击一个列表时，输出对应的索引（不能用JQuery哦）
<body>
    <ul>
        <li>test1</li>
        <li>test2</li>
    </ul>
    <!-- <script>
        for(let i = 0, len = lis.length; i < len; i++) {
            lis[i].addEventListener('click', function () {
                console.log(i);
            }, false);
        }
    </script> -->
    <!-- <script>
    // 还有一种方法，就是很多经典书本都提到的，使用立即执行函数来切断闭包对外部变量i的引用：
        for(var i = 0, len = lis.length; i < len; i++) {
            (function (i) {
                lis[i].addEventListener('click', function () {
                    console.log(i);
                }, false);
            })(i)
        }
    当然啦，如果对闭包不是很熟练，还可以通过事件委托来避开这个陷阱哈，代码如下：
<!-- 
        var ul = document.querySelector('ul');
        var lis = document.querySelectorAll('ul li');
        ul.addEventListener('click', function (e) {
            var target = e.target;
            if(target.nodeName.toLowerCase() === 'li') {
                console.log([].indexOf.call(lis, target));
            }
        }, false); -->
  </script> -->
</body>

4，CSS实现矩形按钮右边缘的中间有个往里凹的小半圆，如图：button
5，为什么用vue而不用NG或者React？
6,说说JS的内存机制及垃圾回收机制

7,实现一个算法，寻找字符串中出现次数最少的、并且首次出现位置最前的字符
如"cbaacfdeaebb"，符合要求的是"f"，因为他只出现了一次（次数最少）。并且比其他只出现一次的字符（如"d"）首次出现的位置最靠前。
8,http和tpc的关系，以及什么是https
10,Node的特点（优点和缺点）
11,未来三年的职业规划

HTML+CSS
1.对WEB标准以及W3C的理解与认识
标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外 链css和js脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维 护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性；

2.xhtml和html有什么区别
HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言
最主要的不同：
XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
标签名必须用小写字母。
XHTML 文档必须拥有根元素。

3.Doctype? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义? 
用于声明文档使用那种规范（html/Xhtml）一般为 严格 过度 基于框架的html文档
加入XMl声明可触发，解析方式更改为IE5.5 拥有IE5.5的bug

4.行内元素有哪些?块级元素有哪些?CSS的盒模型?
块级元素：div p h1-h4 form ul
行内元素: a b br i span input select
Css盒模型:内容，border ,margin，padding

5.CSS引入的方式有哪些? link和@import的区别是?
内联 内嵌 外链 导入
区别 ：同时加载
前者无兼容性，后者CSS2.1以下浏览器不支持
Link 支持使用javascript改变样式，后者不可

6.CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高?
标签选择符 类选择符 id选择符
继承不如指定 Id>class>标签选择
后者优先级高

7.前端页面有哪三层构成，分别是什么?作用是什么?
结构层 Html 表示层 CSS 行为层 js

8.css的基本语句构成是?
选择器{属性1:值1;属性2:值2;……}

9.你做的页面在哪些流览器测试过?这些浏览器的内核分别是什么?
Ie(Ie内核) 火狐（Gecko） 谷歌（webkit） opear(Presto)

10.写出几种IE6 BUG的解决方法
1.双边距BUG float引起的 使用display
2.3像素问题 使用float引起的 使用dislpay:inline -3px
3.超链接hover 点击后失效 使用正确的书写顺序 link visited hover active
4.Ie z-index问题 给父级添加position:relative
5.Png 透明 使用js代码 改
6.Min-height 最小高度 ！Important 解决’
7.select 在ie6下遮盖 使用iframe嵌套
8.为什么没有办法定义1px左右的宽度容器（IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1px）

11.标签上title与alt属性的区别是什么?
Alt 当图片不显示是 用文字代表。
Title 为该属性提供信息

12.描述css reset的作用和用途。
Reset重置浏览器的css默认属性 浏览器的品种不同，样式不同，然后重置，让他们统一

13.解释css sprites，如何使用。
Css 精灵 把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量

14.浏览器标准模式和怪异模式之间的区别是什么?
盒子模型 渲染模式的不同
使用 window.top.document.compatMode 可显示为什么模式

15.你如何对网站的文件和资源进行优化?期待的解决方案包括：
文件合并
文件最小化/文件压缩
使用CDN托管
缓存的使用

16.什么是语义化的HTML?
直观的认识标签 对于搜索引擎的抓取有好处

17.清除浮动的几种方式，各自的优缺点
1.使用空标签清除浮动 clear:both（理论上能清楚任何标签，，，增加无意义的标签）
2.使用overflow:auto（空标签元素清除浮动而不得不增加无意代码的弊端,,使用zoom:1用于兼容IE）
3.是用afert伪元素清除浮动(用于非IE浏览器)

Javascript
1.javascript的typeof返回哪些数据类型
Object number function boolean underfind

2.例举3种强制类型转换和2种隐式类型转换?
强制（parseInt,parseFloat,number）
隐式（== – ===）

3.split() join() 的区别
前者是切割成数组的形式，后者是将数组转换成字符串

4.数组方法pop() push() unshift() shift() Push()尾部添加 pop()尾部删除 Unshift()头部添加 shift()头部删除

5.事件绑定和普通事件有什么区别

6.IE和DOM事件流的区别
1.执行顺序不一样、
2.参数不一样
3.事件加不加on
4.this指向问题

7.IE和标准下有哪些兼容性的写法
Var ev = ev || window.event
document.documentElement.clientWidth || document.body.clientWidth
Var target = ev.srcElement||ev.target

8.ajax请求的时候get 和post方式的区别
一个在url后面 一个放在虚拟载体里面
有大小限制
安全问题
应用不同 一个是论坛等只需要请求的，一个是类似修改密码的

9.call和apply的区别
Object.call(this,obj1,obj2,obj3)
Object.apply(this,arguments)

10.ajax请求时，如何解释json数据
使用eval parse 鉴于安全性考虑 使用parse更靠谱
11.b继承a的方法

12.写一个获取非行间样式的函数

function getStyle(obj,attr,value)
{
if(!value)
{
if(obj.currentStyle)
{
return obj.currentStyle(attr)
}
else
{
obj.getComputedStyle(attr,false)
}
}
else
{
obj.style[attr]=value
}
}

13.事件委托是什么
让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！
http://www.webasily.com/?p=78 例子可见此链接

14.闭包是什么，有什么特性，对页面有什么影响
闭包就是能够读取其他函数内部变量的函数。
http://blog.csdn.net/gaoshanwudi/article/details/7355794 此链接可查看（问这个问题的不是一个公司）

15.如何阻止事件冒泡和默认事件
canceBubble return false

16.添加 删除 替换 插入到某个接点的方法
obj.appendChidl()    obj.innersetBefore  obj.replaceChild   obj.removeChild

17.解释jsonp的原理，以及为什么不是真正的ajax
动态创建script标签，回调函数
Ajax是页面无刷新请求数据操作

18.javascript的本地对象，内置对象和宿主对象
本地对象为array obj regexp等可以new实例化
内置对象为gload Math 等不可以实例化的
宿主为浏览器自带的document,window 等

19.document load 和document ready的区别
Document.onload 是在结构和样式加载完才执行js
Document.ready原生种没有这个方法，jquery中有 $().ready(function)

20.”==”和“===”的不同
前者会自动转换类型，后者不会

21.javascript的同源策略
一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合

22.编写一个数组去重的方法
function oSort(arr)
{
var result ={};
var newArr=[];
for(var i=0;i
{
if(!result[arr])
{
newArr.push(arr)
result[arr]=1
}
}
return newArr
}

[HTML && CSS]1.Doctype严格模式与混杂模式-如何触发这两种模式，区分它们有何意义?


严格模式：使用此类型的网页，浏览器解析将相对严格，不允许使用任何表现样式的标识和属性，比如在元素中直接使用background-color背景色属性。
混杂模式：浏览器对XHTML的解析较为宽松。允许使用4.01中的标签，但必须符合XHTML的语法。
2：行内元素有哪些?块级元素有哪些?CSS的盒模型?
行内元素：span,a,var ,em,input,img,img,textarea,var,em,strong,select,
块级标签：div,p,h1-h3,ul,ol,dl,li,dd,dt,table,td,tr,
CSS的盒模型：CSS布局中的每一个元素，在浏览器的解析中，都被当做一个盒状物。
3.CSS引入的方式有哪些? link和@import的区别是?
CSS引入的方式
在html文档的head部分加入:
在html文档的head部分直接写入css文档。
直接在html标签里写入对这个标签的css控制
测试信息

link和@import的区别是link写在html页面中，@import写在CSS页面中
4.CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高?
CSS选择符: 类选择器 、 标签名选择器、 ID选择器 、 后代选择器（派生选择器）、 群组选择器
可以继承： 类选择器 、 标签名选择器、 后代选择器（派生选择器）、群组选择器
优先级算法：
标签内直接定义：1000
ID选择器：100
类选择器 ：10
标签名选择器：1
内联和important中，important优先级高
5:前端页面有哪三层构成，分别是什么?作用是什么?
结构层；主要指DOM节点；HTML/XHTML
样式层；主要是指页面渲染；CSS
脚本层：主要指页面动画效果；JS/AS
6:css的基本语句构成是?
选择符、属性、值
8：你做的页面在哪些流览器测试过?这些浏览器的内核分别是什么?经常遇到的浏览器的兼容性有哪些?怎么会出现?解决方法是什么?
IE6、7、8、FF、Opear、Safari、Chrome、Maxthon
Trident：Windows 下的 IE 浏览器使用的内核代号。除 IE 外，众多的 IE Shell（如 Maxthon ）都使用这个内核。

Gecko：Mozilla Firefox 浏览器使用的内核代号。
Presto：Opera 浏览器使用的内核代号，这是目前公认网页浏览速度最快的浏览器内核。
KHTML/WebCore： Konqueror/Safari 浏览器使用的内核代号。
经常遇到的浏览器兼容问题：
1.在有的浏览器中，默认字体大小为12px,所以在设字体大小的时候，最小设为12px，如果在做的过程中，发现字体小于12，可直接作为图片使用
2.a标签对里不能嵌套a标签对
3.若给a标签内的内容样式加上样式，需要设置display:block;（在IE中如果设置宽高会自动变成块，在FF中则不会），但如果设置了float属性，就不需要设置display:block。
4.ul，ol在FF默认情况下，有list-style-type样式和padding值，dl在IE和FF默认情况下，有padding值，所以应该事先声明ul,li,ol,dl,dd,dd{margin:0;padding:0}。
5.作为外部 wrapper 的 div 不要定死高度, 最好还加上 overflow: hidden.以达到高度自适应
6.关于手形光标. cursor: pointer. 而hand 只适用于 IE.
7.css布局中的居中问题:在父级元素定义TEXT-ALIGN: center;这个的意思就是在父级元素内的内容居中；对于IE这样设定就已经可以了。但在mozilla中不能居中。解决办法就是在子元素定义时候设定时再加上“margin-right: auto;margin-left: auto; ”需要说明的是，如果你想用这个方法使整个页面要居中，建议不要套在一个DIV里，你可以依次拆出多个div，只要在每个拆出的div里定义margin-right: auto;margin-left: auto; 就可以了。
8.浮动ie产生的双倍距离
#box{ float:left; width:100px; margin:0 0 0 100px; //这种情况之下IE会产生200px的距离，这时需要设置display:inline; //使浮动忽略}
9.如何居中一个浮动元素?
对其设置margin:x auto;
10.有没有关注HTML5和CSS3?如有请简单说一些您对它们的了解情况！
有，HTML5的是目前正在为未来的HTML标准的主要修订的发展。其前任一样，4.01和XHTML 1.1的HTML，HTML5的是一个结构和提交万维网内容的标准。新标准结合了诸如视频播放，拖动和放下以前曾在第三方浏览器插件依赖例如Adobe Flash，微软的Silverlight的功能，和谷歌齿轮。
12:如果让你来制作一个访问量很高的大型网站，你会如何来管理所有CSS文件、JS与图片?
把所有的CSS文件都放入一个样式表中,通过把所有的脚本放到一个文件中来减少HTTP请求的方法。js文件也采用同样的方法。把所有的背景图像都放到一个图片文件中，然后通过CSS的background-image和background-position属性来显示图片的不同部分。
14：你对前端界面工程师这个职位是怎么样理解的?它的前景会怎么样?
前端界面工程师：1. 与交互设计师、视觉设计师协作，根据设计图完成页面制作。 2. 维护及优化网站前端性能。
前景： 长期以来，国内前端开发在整个软件开发行业内占得比重较小，发展较晚。网站也多倾向于赢利最大化而轻视用户体验。前后端比例悬殊大。近几年来，随着 以用户为中心 的思想普及发展。前端开发呈现出强劲的发展态势，前端开发人员在项目中的重要性日益突出。前端开发人员呈现出严重的人员短缺现象。
[Javascript]1：js是什么，js和html 的开发如何结合?

js是一种基于对象和事件驱动，并具有安全性的脚本语言。
可以html的三个地方编写js脚本语言：一是在网页文件的标签对中直接编写脚本程序代码；二是将脚本程序代码放置在一个单独的文件中，在网页文件中引用这个脚本程序语言；三是将脚本程序代码作为某个元素的事件属性值或超链接的href属性值。

div{margin: 0;padding: 0;border:1px red solid;}

2.怎样添加、移除、移动、复制、创建和查找节点
添加：append
删除：remove
移动：
复制：
创建：create
查找：

（1）创建新节点
      createDocumentFragment()    //创建一个DOM片段
      createElement_x_x()   //创建一个具体的元素
      createTextNode()   //创建一个文本节点
（2）添加、移除、替换、插入
      a()
      removeChild()
      replaceChild()
      insertBefore()
（3）查找
      getElementsByTagName_r()    //通过标签名称
      getElementsByName()    //通过元素的Name属性的值
      getElementById()    //通过元素Id，唯一性
3.怎样使用事件以及IE和DOM事件模型之间存在哪些主要差别
4.面向对象编程:b怎么继承a
5.看看下面alert的结果是什么
view sourceprint?1.function b(x, y, a) {
.arguments[2] = 10;
.alert(a);
}
b(1, 2, 3);
如果函数体改成下面，结果又会是什么?
a = 10;
alert(arguments[2] );
6.请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象
var obj = parseQueryString(url);
alert(obj.key0) // 输出0
7.ajax是什么? ajax的交互模型? 同步和异步的区别? 如何解决跨域问题?
8.什么是闭包?下面这个ul，如何点击每一列的时候alert其index?

这是第一条这是第二条这是第三条

闭包是可以包含自由（未绑定）变量的代码块；这些变量不是在这个代码块或者任何全局上下文中定义的，而是在定义代码块的环境中定义。
9.最近看的一篇Javascript的文章是?
10.常使用的库有哪些?常用的前端开发工具?开发过什么应用或组件?
最常用的库：jquery-1.4.2.min.js
常用的前端开发工具：firebug、photoshop、editplus、取色器、色板、eclipse
11.说说YSlow(可以详细一点)
yslow是一个工具，也可以理解成是一个插件，是基于Mozilla Firefox上firebug插件的一个插件。它的出现的主要目的就是检测我们的页面性能。它让用户可以就近取得所需的内容，解决网络拥挤的状况，提高用户访问网站的响应速度；其次，yahoo在ETags配置上也有独特之处，声明过期，就是说，用户从服务器取数据的时候，如果文件变化了，给他反馈新的文件，如果文件没有变化，只需告诉客户端没有变化即可，不必再把文件取回来，这样就节省了大量的网络带宽和资源。另外，只要将那些在加载过程中要执行的脚本放到底部，就可以实现最大的下载并行。
小说网对其评价：(a) 从样式表着手，避免CSS表达式。CSS表达式需要很多资源，有时甚至会造成页面假死。(b) 缓存一下不常修改的文件，并开启 GZIP压缩，减少网络传输时间(c) 减少DNS查找。YSlow认为一个页面上2个以内的域名比较合理。有些网站挂了不少统计代码，或者广告代码。统计拖累用户速度、广告影响用户视觉。(d) 避免重定向（跳转），我们在给链接地址的时候，一般会把链接地址写成 http://xxx.cn/xxx 或者 http://xxx.cn/xxx/ ，有区别吗?有！服务器如果接收到的URL是http://xxx.cn/xxx，它会自动重定向到http://xxx.cn/xxx/，虽然进入的都 是同一个页面，但是前者比后者多走了一步，重定向，显然多多少少浪费了一点时间。

Google 对其评价：多数人可能认为GOOGLE没什么值得借鉴的，毕竟整站就那么几行代码。
但是这几行代码，每天要承受过亿的用户访问量，在如此大的压力下，运行流畅，有很大一个因素取决于Minify JS。通过查看它的源代码可以发现，google不仅将JS进行了压缩，连页面代码中也没有不必要的空格和符号，使用了最短最简洁的变量名。联系到开发方 面，建议大家采用yuicompressor，在调试时使用便于开发的模式，调试完成后直接压缩并发布。让用户得到最快捷的用户体验。

百度：
1、JavaScript有哪几种数据类型
2、中alt和tittle的区别
3、下面css标签在JavaScript中调用应如何拼写，border-left-color，-moz-
4、动态打印 yyyy-mm-dd hh:mm:ss
5、如何提高网页的运行速度
6、JavaScript中如何对一个对象进行深度clone
7、flash中ActionScript2.0和ActionScript3.0面向对象的异同
答案见http://www.lihaihong.com/article/86.html
第一题
编写一个方法 求一个字符串的字节长度
第二题
如何控制alert中的换行
第三题
解释document.getElementByIdx_x_x_x(“ElementID”).style.fontSize=”1.5em”
第四题
将一个类似图中的效果分离成css和html
第五题
按照格式 xxxx年xx月xx日xx时xx分xx秒动态显示时间 要求不足10的补0
第六题
编写一个方法 去掉一个数组的重复元素
第七题
说出3条以上ff和ie的脚本兼容问题
第八题
按要求写一个简单的ajax示例 简单的没意义 就不写了
腾讯：
1.请实现，鼠标点击页面中的任意标签，alert该标签的名称．（注意兼容性）
HTML && CSS
1.Doctype? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义? 行内元素有哪些?块级元素有哪些?CSS的盒模型?
2.CSS引入的方式有哪些? link和@import的区别?
3.CSS选择符有哪些?哪些属性可以继承?优先级?内联和important哪个优先级高?
4.经常遇到的浏览器的兼容性有哪些?怎么会出现?解决方法是什么?
5.如何居中一个浮动元素?
6.HTML5和CSS3的了解情况
7.你怎么来实现下面这个设计图

Javascript
1.怎样添加、移除、移动、复制、创建和查找节点


（1）创建新节点
      createDocumentFragment()    //创建一个DOM片段
      createElement_x_x()   //创建一个具体的元素
      createTextNode()   //创建一个文本节点
（2）添加、移除、替换、插入
      a()
      removeChild()
      replaceChild()
      insertBefore()
（3）查找
      getElementsByTagName_r()    //通过标签名称
      getElementsByName()    //通过元素的Name属性的值
      getElementById()    //通过元素Id，唯一性
2.怎样使用事件以及IE和DOM事件模型之间存在哪些主要差别
3.面向对象编程:b怎么继承a
4.看看下面alert的结果是什么
function b(x, y, a) {
arguments[2] = 10;
alert(a);
}
b(1, 2, 3);
如果函数体改成下面，结果又会是什么?
a = 10;
alert(arguments[2] );
5.请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象，如：var url = ”http://www.taobao.com/index.php?key0=0&key1=1& key2=2…..”
var obj = parseQueryString(url);
alert(obj.key0) // 输出0
(来自淘宝网校园招聘笔试题)
6.ajax是什么? ajax的交互模型? 同步和异步的区别? 如何解决跨域问题?
7.什么是闭包?下面这个ul，如何点击每一列的时候alert其index?

8.最近看的一篇Javascript的文章
9.你如何去实现这个Tabview

10.常使用的库有哪些?常用的前端开发工具?开发过什么应用或组件?
11.性能-Yslow

[HTML && CSS]1.Doctype? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义?
2：行内元素有哪些?块级元素有哪些?CSS的盒模型?
3.CSS引入的方式有哪些? link和@import的区别是?
4.CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高?
5:前端页面有哪三层构成，分别是什么?作用是什么?
6:css的基本语句构成是?
8：你做的页面在哪些流览器测试过?这些浏览器的内核分别是什么?经常遇到的浏览器的兼容性有哪些?怎么会出现?解决方法是什么?
9.如何居中一个浮动元素?
10.有没有关注HTML5和CSS3?如有请简单说一些您对它们的了解情况！
11.你怎么来实现下面这个设计图,主要讲述思路 （效果图省略）
13:如果让你来制作一个访问量很高的大型网站，你会如何来管理所有CSS文件、JS与图片?
14：你对前端界面工程师这个职位是怎么样理解的?它的前景会怎么样?


DOM结构——两个节点之间可能存在哪些关系以及如何在节点之间任意移动。


DOM操作——怎样添加、移除、移动、复制、创建和查找节点。


事件——怎样使用事件以及IE和DOM事件模型之间存在哪些主要差别。

XMLHttpRequest——这是什么、怎样完整地执行一次GET请求、怎样检测错误。

严格模式与混杂模式——如何触发这两种模式，区分它们有何意义。

盒模型——外边距、内边距和边框之间的关系，IE 8以下版本的浏览器中的盒模型有什么不同。

块级元素与行内元素——怎么用CSS控制它们、它们怎样影响周围的元素以及你觉得应该如何定义它们的样式。

浮动元素——怎么使用它们、它们有什么问题以及怎么解决这些问题。

前端开发工程师面试题 Javascript
1. 要动态改变层中内容可以使用的方法有（AB ）
a)innerHTML
b)innerText
c)通过设置层的隐藏和显示来实现
d)通过设置层的样式属性的display属性

2. 当按键盘A时，使用onKeyDown事件打印event.keyCode的结果是（A ）
a)65
b)13
c)97
d)37

3. 在javascript里，下列选项中不属于数组方法的是（B）；
a)sort()
b)length()
c)concat()
d)reverse()
4. 下列哪一个选项可以用来检索被选定的选项的索引号?(B)
a)disabled
b)selectedIndex
c)option
d)multiple

5. 希望图片具有”提交”按钮同样的功能,该如何编写表单提交?(A )
a)在图片的onClick事件中手动提交
b)在图片上添加onSubmit事件
c)在图片的onSubmit事件中手动提交
d)在表单中自动提交
7. 下列选项中,描述正确的是(选择两项) 。( AD )
a)options.add(new Option(‘a’,'A’))可以动态添加一个下拉列表选项
b)option.add(new Option(‘a’,'A’))可以动态添加一个下拉列表选项
c)new Option(‘a’,'A’)中’a'表示列表选项的值,’A'用于在页面中显示
d)new Option(‘a’,'A’)中’A'表示列表选项的值,’a'用于在页面中显示

8. 、 var emp = new Array(3);
for(var i in emp)
以下答案中能与for循环代码互换的是: （选择一项）。(D )
A for(var i =0; i
B for(var i =0; i
C for(var i =0; i
D for(var i =0; i

9. 制作级联菜单功能时调用的是下拉列表框的（A ）事件。
a)onChange
b)onFocus
c)selected
d)onClick

10. 下列声明数组的语句中，错误的选项是（ C ）。
a)Var arry= new Array()
b)Var arry=new Array(3)
c)Var arry[]=new Array(3)(4)
d)Var arry=new Array(‘3’,’4’)

11. 下列属性哪一个能够实现层的隐藏?（C ）
a)display:fals
b)display:hidden
c)display:none
d)display:” ”

12. 下列哪一个选项不属于document对象的方法?（D ）
a)focus()
b)getElementById()
c)getElementsByName()
d)bgColor()

13. 下列哪项是按下键盘事件(AB )
a)onKeyDown
b)onKeyPress
c)keyCode
d)onMouseOver
14. javascript进行表单验证的目的是（B ）
a)把用户的正确信息提交给服务器
b)检查提交的数据必须符合实际
c)使得页面变得美观、大方
d)减轻服务器端的压力
15. 、 display属性值的常用取值不包括(C )
a)inline
b)block
c)hidden
d)none

16. 以下有关pixelTop属性与top属性的说法正确的是。(D )
a)都是Location对象的属性
b)使用时返回值都是字符串
c)都是返回以像素为单位的数值
d)以上都不对

17. 使用open方法打开具有浏览器工具条,地址栏,菜单栏的窗口，下列选项正确的是__D__
a)open("x.html","HI","toolbas=1,scrollbars=1,status=1");
b)open("HI","scrollbars=1,location=1,status=1");
c)open("x.html","status=yes,menubar=1,location=1");
d)open("x.html","HI","toolbas=yes,menubar=1,location=1");

18. 下面关闭名为mydiv的层的代码正确的是(C )
a)document.getElementByIdx_x_x_x(mydiv).style.display="none";
b)document.getElementByIdx_x_x_x("mydiv").style.display=none;
c)document.getElementByIdx_x_x_x("mydiv").style.display="none";
d)document.getElementByIdx_x_x_x("mydiv").style.display=="none";
19. 为什么要使用Div+CSS布局
形式与内容分离
大大减少页面代码，提高页面浏览速度
结构清晰，有利于SEO
缩短改版时间， 布局更方便
一次设计，多次使用

20. Block元素的特点是什么?哪些元素默认为Block元素
总是在新行上开始；
高度，行高以及顶和底边距都可控制；
宽度缺省是它的容器的100%，除非设定一个宽度
是块元素的有：,,
,
, 和21. 、 inline元素的特点是什么?哪些元素属于inline元素?
和其他元素都在一行上；
高，行高及顶和底边距不可改变；
宽度就是它的文字或图片的宽度，不可改变。

是inline元素的有：, , ,
, , 
和。 

22. 、 javascript中表达式parseInt(“X8X8”)+paseFloat(‘8’)的结果是什么?( C)
a)8+8
b)88
c)16
d)“8”+’8

23. String对象的方法不包括(C )
a)charAt()；
b)substring()
c)length
d)toUpperCase()

24. 关于setTimeout(“check”,10)中说法正确的是( D)
a)程序循环执行10次
b)Check函数每10秒执行一次
c)10做为参数传给函数check
d)Check函数每10毫秒执行一次

25. 以下哪个单词不属于javascript关键字：（C）
a)with
b)parent
c)class
d)void 

HTML&CSS：
    对Web标准的理解、浏览器内核差异、兼容性、hack、CSS基本功：布局、盒子模型、选择器优先级及使用、HTML5、CSS3、移动端适应 
JavaScript：  
    数据类型、面向对象、继承、闭包、插件、作用域、跨域、原型链、模块化、自定义事件、内存泄漏、事件机制、异步装载回调、模板引擎、Nodejs、JSON、ajax等。
其他：
   HTTP、安全、正则、优化、重构、响应式、移动端、团队协作、可维护、SEO、UED、架构、职业生涯 



    1、DOM结构 —— 两个节点之间可能存在哪些关系以及如何在节点之间任意移动。

    2、DOM操作  ——如何添加、移除、移动、复制、创建和查找节点等。

    3、事件    —— 如何使用事件，以及IE和标准DOM事件模型之间存在的差别。

    4、XMLHttpRequest —— 这是什么、怎样完整地执行一次GET请求、怎样检测错误。

    5、严格模式与混杂模式 —— 如何触发这两种模式，区分它们有何意义。

    6、盒模型 —— 外边距、内边距和边框之间的关系，及IE8以下版本的浏览器中的盒模型

    7、块级元素与行内元素 —— 怎么用CSS控制它们、以及如何合理的使用它们

    8、浮动元素——怎么使用它们、它们有什么问题以及怎么解决这些问题。

    9、HTML与XHTML——二者有什么区别，你觉得应该使用哪一个并说出理由。

    10、JSON  —— 作用、用途、设计结构。