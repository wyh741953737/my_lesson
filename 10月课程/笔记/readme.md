BFC 给父元素加上overflow：hidden 可以创建一个格式化上下文环境，定义它可得到子元素的高度

stylus 
css 预编译系统 写的。styl文件 stylus编译成css文件

stylus style.styl -o css.css
使用stylus编译。styl文件 输出css.css
stylus 构建css开发工作流程
代码写在。style文件中
浏览器要的是。css文件
stylus -w style.styl -o style.css
live-server 监听css 文件高度改变自动刷新

weui结合小程序
weui是微信like的界面解决方案，适用于公众号，
引入weui.wxcss文件
来到weui组件官网，要哪个，用哪个，覆盖了70%的常用组件

MVVM 
M 数据 模型
V  页面 视图
vM 数据绑定到界面上 视图模型 =>模板{{}}

几种状态
username 数据 输入前，输入后，状态改变带来数据的改变 维护状态
inpu 视图
数据跟input 步调一致
拒绝使用dom查询


手机尺寸
px 在手机端有问题
css 像素 px retina 750px 
硬件物理尺寸
iphone8 375pt
8plus    414pt

相对单位
rem 相对于html上设置的font-size
em单位 相对于自身font-size  10rem iphone整屏幕
vh vw 不管任何设备 宽度100vw 高度100vh
将设备宽度的十分之一作为html
font-size,10rem 等于整屏幕宽度，方便生成栅格系统
inline-block用来做布局，将block元素变成inline，跟兄弟良好相处
天生bug，会有间隙，来自换行符
1，删除换行符
2，父亲font-size：0
rwd 自适应网页


-嵌套
省去选择器的重复输入，会自动帮助我们补全上层的选择器
嵌套给css带来模块化的概念
一个模块下的组织，统一组织
苹果头部高度44


算大小，精确
h2 lh 整站风格 13px 18px 1.3846；行高用比例 
。box padding-left 18px pt  12px 
优先考虑模块的复用，设计师会在风格，用户品味，设计规律方面，有经验的重复
svg使用数学模型 无限放大 。。。。

after 伪元素


1.分析布局+建立html结构
2。box-sizing 默认 宽度，高度是内容的设置，元素在页面上真正占据的位置是整个盒子模型，内容>padding>border>margin
元素出现在页面上，其实是一个paiting绘制原型
如何解决？
box-sizing：border-box；
占位大小：border+padding+content=设置width=50% 优先border padding 占位置
游戏开始了鼠上来 classList css 表现里加状态类

良好的结构，语义化，功能准确性是首要任务

input type=file accept="image/*" multiple
.hd+.bd+.ft
.page 
经验，移动端常用组件
-.weui-uploader
.weui-cells
BEM
.weui-uploader_file-content
Element 不受html层次限制，作用及任务，业务三层半
modifier状态 ——要善于在元素结构化类名化 加状态类名
BE负责结构   Modifier动态加上
长按（tap）防止   -webkit-tap-highlight-color: transparent;


函数
代码为了执行任务，分成多个子任务，函数是任务的代码单元，基本的代码组织方式。

代码严谨性，做校验
数据类型，
js 参数太灵活，可传可不传
arguments 与this一样，会在函数运行时生成，他是函数执行时的参数数组
根据参数数量不一样，达到不同功能
！！！！！！！！！！！！js数据类型转化，隐式，强制转化


 css命名规范 BEM
微信UI规范，内一致嵌公众号，小程序
调起webview，为了让用户体验，让用户有认同感
良好的结构和语义化标签
弹性布局 flex 1:1：1 
flew-wrap 换行 nowrap 自动缩小，不换行  wrap-reverse换行，在下面
flex-flow 横向排列不换行
Block   页面是由多个Block 构成的，跟其它的block区分开来
http状态码  方便分析 2开头都是好 200
3开头 重定向 跳转
4开头 404 not found 403 无权使用
5开头 错误



