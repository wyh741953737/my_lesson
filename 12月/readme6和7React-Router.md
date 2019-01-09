#hashtag 在当前页面切换，本页面不会刷新
单页应用  hashchange会带来一个事件，做页面动态加载  不会刷新页面
#hashchange是url的一部分，
传统地址切换有y以下几个问题
1，重度依赖于http协议（当只有后端路由时）   发送一个请求 重新生成整个html网页，太浪费，新页面有新dom渲染过程，页面会白一下（扔掉之前url），传输慢，体验下降，新时代路由 history api，或有hashtag 不会产生页面跳转，但是可以捕捉到事件，马上切出对应的组件。
url hash变了，不会发生http请求，页面不会被刷新。

history api url访问，都是浏览器中的一个访问记录，就是数据结构里的栈，pushstate（null，null，”#/hello‘）入栈一个浏览历史 pop 给我们的访问新增一个记录，但不会刷新页面，得到一个popstate事件，页面组件的切换
前端路由已经成熟，即可hash，亦可push切换，全都交给pushstate


一切资源皆可打包， webpack bundle
import logo from './logo.svg'图片也可引入js中，参与js运算
在react里引入css img


组件是封装了或组合了一些html，完成一个特定功能，并以一个自定义标签的形式向外提供，html，css，js
antd ui风格，小蚂蚁，大力量，强调配置优先


2,路由接管一切，配置在最前面
路由方式2种：1：hashrouter，2：path修改   
localhost:3002/#/   是hashrouter的路由地址，自动加#/
localhost：3002/#/hashboard/moniter  / 后面是path  
有两种路由BrowserRouter（高级浏览器，mobile，url更好理解）  HashRouter（兼容性好，支持ie8以上所有浏览器，不需要通过pushstate。pushstate来自history，history.pushstate（state，title，url）

<Router>
<Route>


ref和current拿到节点值