table网页里最早  放置内容 
div 随着内容宽度自动响应

layout  css里表达布局是不完整的，
1，网页跟平面设计媒体一样，好看，不好看用table做布局，tr+td天生用来展示数据，只用于这一项，table不适合现代富媒体
2，标签的盒模型 比较慢，易出问题，margin合并，浮动，定位、成熟的float精确的定位
display：flex display：table
标签能力及表现，加css属性，布局

圣杯和双飞翼布局非常传统，兼容性良好 都是三列左右栏固定中间栏边框自适应的网页布局 container部分高度保持一致。
ie9弹性布局，ie8 inline-block都年轻
它的布局要求有几点
三列布局，中间宽度自适应，两边定宽；
中间栏要在浏览器中优先展示渲染；
允许任意列的高度最高；

layout
css里布局是不能说的秘密， css 里直接表达布局是不完整的
1. 网页跟平面设计媒体一样， 好看。
不好看时， 由table 来做布局，tr + td
天生是用来， 展示数据的，只用于这一项，　table 不适合现代富媒体
2. 标签的盒模型 比较慢， 易出问题 margin 合并
   浮动， 定位， 
   成熟的float 精确的定位， 现代的display:flex display:table
   标签能力及表现， 加css属性 布局。
   布局layout = 行row列column的规划
3. 由2 推出圣杯布局 
4. 圣杯式 DIV+CSS 
兼容性一点问题都没有的三列式布局， 主列和两边侧边栏。 PC时代， 标签DIV 
浮动 block  => inline 但是宽度还在
圣杯式布局和双飞翼布局经典的三栏式布局， 效果基本相同， 两边两栏宽度固定，中间栏宽度自适应。中间栏放最前面，为的是显示的最优性能，放在前面的html先下载先渲染。兼容性好，PC IE8  -> chrome/Edge, 
margin 负值 float left  主列100% 侧边栏margin 负值
区别： 圣杯式， position:relative + left/right -200px
双飞翼： 给main 加子元素， main  都是留出位子， 但是双飞翼不需要让两侧边栏再移位置了。

Flex布局
1.首先将container块设置为一个Flex容器
2.对这三个项目做初始设置
3.通过order属性设置排列顺序
对于order属性：定义项目的排列顺序，越小越靠前，默认为0。
４.通过项目属性flex-grow设置main的放大比例，将空余的空间用main来填充，使三个项目不满一整行；默认为0，也就是对剩余空间不做处理。
绝对定位布局

高阶函数
箭头函数

wx.getSetting 用户授权范围里查询基本信息使用权，scope.userinfo 然后 高阶函数 success fail
未授权（就要授权-弹出授权询问框） 
已授权（归并，去登录 this.getuserinfo）


session

cookie 和session 的区别：
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。
2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
   考虑到安全应当使用session。
3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
   考虑到减轻服务器性能方面，应当使用COOKIE。
4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
cookie内容包括：名字，值，过期时间，路径和域。若不设置过期时间，这种生命期为浏览器会话期的cookie被称为会话ookie。