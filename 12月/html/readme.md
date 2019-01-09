- --hot 热更新 
当状态改变的时候，只更新对应的部分，不会影响全局
  --open 自动打开浏览器

- tsconfig.json       typescript
  webpack.config.js   工作流
    entry src/index.ts 
        有多个入口 给打包后的文件命名
        [
            app:./index.ts,
            vendorStyle: ,
        ] 
        为何需要有多个入口？打包需要时间，bootstrap 样式绝对不会改变，没必要每次都去打包。
        css lib,react react-router-dom redux
        没必要一次性打包
        打包出来 index.html 两个文件，http请求数增加了，但是加的不多，现代浏览器(chrom) 同时并发少数的http对性能没有什么影响，
        反而有优势，静态资源是会缓存的，lib css js 不需要下载，而业务组件开发的src component js 会经常修改，所以分开打包，
        只会让用户更新这一小部分的js，打开页面会更快
        不会改变的lib部分会放到cdn上面去

    webpack-dev-server  port
    html-plugin src/index.html template
    babel               js编译

  - typescript 在react中做加法，让项目强类型化，减少错误
  1. members: MemberEntity[]
  生命周期中请求，api方法返回值类型通过一个 interface MemberEntity 先声明定义
  2. model层
  3. api层
  

  common input ,button
  form => page(redux state) => pageContainer
  
