
16号下午
强制类型转换 得到的字符串转换数字 Number,parseInt

babel   es5=>es5

如何设计跨终端的网页栅格系统，4等分（pc），三等分（ipaid），二等分（手机）

-Twitter Bootstrap 是自适应的前端框架，一份代码，到处运行
 在一个col上定义多个尺寸，
 media query
 .col-lg-n 超大 >1200 min-width
 .col-md-n 中等电脑 笔记本 >1000px
 .col-sm-n ipaid   768<ipia<1024
 .col-xs-n 手机   <767 max-whith 767

 .container      .row        .col
 float具有更好的兼容性
 
16晚： compile    
replace方法  替换，查找
正则表达式是js 对象
用来查找，匹配字符或者文本
数学公式  模式 /\$/   /\{\{(.*)\}\}/  中间的.可以匹配任何一个字符，*表示匹配0次或多次
RegExp正则表达式 可以new RegExp得到一个对象
Test方法 测试字符串是否满足模式匹配
RegExp.$1类  找到{{}}中key的值 通过replace回执给·模板  
g全局匹配 ，停不下来
m多行匹配 multiline
i  搜索不区分大小写。

responsive web design自适应网页设计
.col-md-${n}   .col-sm=${n}, .col-xs-s{n}
一份代码适配不同手机  优势，降低了开发成本
缺点：85%手机
手机里就会多一些多余的代码要下载

pc和移动端一般分开，mobile first用户量大，解决适配问题
rem 或者em 解决适配问题
10rem 手机宽度 1rem=1/10宽度


为什么模板里要有if else for 指令 （因为模板里存在业务逻辑,）
wx：if      wx：for     wx:else
mvm界面有状态（登录前，登陆后）界面状态由数据决定
数据驱动界面 以及界面状态 界面状态和数据绑定   
hasUserInfo 布尔值变量，决定了同一界面，有两种状态  wx：if wx：else
block 占位符主键，一般用于承载指令
微信生态及其机制
小程序，获得用户信息和信任，在微信里 
小程序分享到微信讨论组 用户信息，是隐私，要获取授权，
button（特殊的 open-type=“getUserInfo”）询问+block显示
bindgetUserInfo=“getUserInfo” 绑定一个事件

在小程序调用setdata 值发生改变 
-setData（）改变data里数据的值，并且拥有让界面里相关的部分热更新的能力

数据逻辑，页面响应

wx：key 循环一定要加唯一性的key
一个列表值发生改变，如果更替交换，整个列表的wxml，太浪费了，
key  找到相应那个，进行更新

设计数据
lists=[已经完成2项，未完成8项]
lists全部列表
downListed=[]
undownloadList=[]
v-for="{{lists}}"
currentState='all'
v-if+v-for

界面状态
多种状态
1.tabber.active UI状态 =》数据驱动，cureentState=‘all'
2.任务列表 ，列表数据 UI状态
currentlist

 
 domReady时间 ，比window.onload早一些

 性能优化，script标签具有阻塞性，表现为根据src下载代码或者行内js并且执行，耗时多，因此不建议放头部
 页面的显示，painting 绘制 （dom）的渲染，排列，重绘重排 
 利用好生命周期，可以监听的函数 window.onload document.  DomContentLoaded 
js 开始 不要阻止页面下载，DOm绘制（html，css先绘制完，但不要等到window.onload 加载完才开始
DomContentLoaded    dom   ready img  


$(callback)    jquery 立即执行函数    函数接受一个参数 callback
$使用用途  Dom ready事件， 
$(function(){
    写js 
})
$(selector)   用于选择元素

fetch  和$.getJSON区别

动态页面 可以不用等数据取出来，先显示页面，再去取数据，快得多



jquery 整站开发框架
semantic-ui  支持IE9以上 年轻的整站开发，
bootstrap 3.6 保守一些
css 兼容性 手机，css兼容性没有太大问题
pc项目 向后兼容 客户需求 IE9是分界点
css3属性要注意兼容
flex有两个版本 -webkit-box flex
移动端不会用bootstrap，semantic-ui，浪费的代码 responsive web dsign


get 提交和 post提交
decodeuriComponent 方法：编码后的。。。
encodeURIComponent 

？queryString   编码，解码

Component组件
来自FaceBook 用搭积木的概念来类比做网站
我们的网站不再试由标签这个原子级别的构成，div+css
由组件构成，swiper scroll-view mapview 一块积木，具有特写的功能或者表现

自定义组件开发
components 是MVVM架构的核心，它和pages是平级的
component 构成page.json文件
{
    'usingComponent':{
        'icon':'../../components/icon/index'
    }
}

icon组件 在应用中，会得到一些图表，字体图表
edit add map home 
alley iconfont ttf文件 样式
相对独立的一个组件，可以在多个页面复用

easy mock 前端开发标配工具 
前端界面很快，但是没有数据，前端自己造数据，data本地
ajax请求数据填充，loading状态  mock伪造数据 
数据请求地址 

用中括号加三个...把字符拆开 如[..."SPREADS!"]拆开，数组
let jump = document.querySelector('.jump').innerHTML
    let jumpArr = [...jump]
    jumpArr.forEach((item, index) => {                            
      let span = document.createElement('span')
      span.innerHTML = item
      document.querySelector('body').appendChild(span)
    })

     const heading=document.querySelector('.jump');
   header.innerHTML=[...heading.textContent].map((letter)=>`<span>${letter}</span>`).join('')  

object.prototype.map.call(people,function){
    
}


weui  源码分析
1，widget  以业务模块的方式迭代
1，base  
reset 样式重置，
minxin
variable
可以在多个widget里复用


stylus -w src -d dist   -w 监听   -d 进行整个文件夹的编译，向外输出

component 构成页面的基石，可复用，可传自定义属性定制
小程序本身没有提供的，我们可在components文件夹里自定义
可以使用第三方提供的自定义组件
vant 小程序基于此组件框架70%的工作不用做，vant经历了有赞电商团队十几万项目的校验，类电商的项目，用它吧。
开发方式：page.json使用usingcompont声明要的组件
wxml文件由组件组成
有赞写出来vant
van-search用法 
组件是代表着一堆在其内部的标签或子标签，进行统一的向外提供组件功能，
外部，wxml调用组件
内部组件 vant 内部 在使用时，不用操作的
内外交流props
定制性，show-action  use-action-slot
slot 插槽
让组件内部插上一个位置标记，调用·组件时，将定制的标签传到这个slot，实现了组件的定制

BASS
Backend as service
后端开发变成一种服务，在云开发时代，时间是王道，js工程师已经不满足用node走向后台
服务器购买，linux配置，数据库及ngnix 管理
运维这边高花销且不易打理，打包提供给我们用
后端sdk wx.cloud  数据库及mongodb 文件上传 用户登录，内置
全栈，一个人从前到后搞定。得益于BASS
推出？为：向前端工程师示好，简单，方便，快速出活

npm 是node包管理器
npm init -y 初始化后得到一个package.json文件
工作流  node启动工作流程，方便前端开发，
gulp(工作流) 核心功能  核心是task理念    gulp.task   .src 是他的API 找到某个文件，送去工作车间，
 .pipe   .dest() 
 npm本身是node包管理器，利用它初始化项目，npm install 下载到本地使用  除webpack外，轻巧的项目流程管理工具

 npm config set 设置
  npm config set init.author.email "741953737@qq.com"
  npm config set init.author.name "wyh741953737"
  npm config set init.author.url "git@github.com:wyh741953737/qm_lesson.git"
  npm config set init.license "MIT"
  npm config set init.version "0.1.0"
  npm init -y

  npm install eslint --save-dev  eslint约束  npm包 eslint 
  
./node_modules/.bin/eslint --init
yarn global add eslint
eslint --init

node index 代码运行
eslint index.js 检查代码和设置的风格有哪些出入
ESLint 是一个插件化的 javascript 代码检测工具，



文件上传，云服务器，ip硬盘，cpu计算，数据存储功能，node 运行环境及操作系统（linux centos）
node（npm node v8。0》koa）运行环境及操作系统
云服务，全部sdk化，数据存储
文件存储wx.cloud.uploadFile
数据存储wx.cloud.database
文件流 出口（path） 出口（path） 硬盘
wx.cloud.uploadFile({
cloudPath打开文件可写流
filePath 打开文件可读流
})
云函数wx.cloud.callFunction
wx.cloud.websdk

js单线程，不阻塞  
耗时：ajax setTimeout 数据库操作，上传下载服务，10s内

组件为做页面组成部分的剥离，template+import 在components/wxml+wxss data
usingComponents：


随着scroll切换curindex
scroll 事件，
wx.systeminfo
math.ceil(offsey/wx.systeminfo)

小程序展示的大部分来自移动、pc生成的内容编辑器富文本
 markman ui-editor html
 content格式是以html div
 

 