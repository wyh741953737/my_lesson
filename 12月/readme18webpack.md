react，小程序，antd组件库，elema组件库，webpack，typescript，node.js


- --hot 选项  热更新 
  当状态改变时， 只更新一部份
  --open 自动打开浏览器

- tsconfig.json typescript 
  webpack.config.js 工作流
    entry src/index.ts
    entry有多个入口，给打包后的文件命名，多个打包用json{}  {app:,vendorStyle:,}
    为何多个？打包要时间，bootstrap样式绝不会改变，没必要每次都打包。css，lib，react，react-router-dom,redux这些没必要和会变的一起一次打包。
    打包出来，index.html引入了两个文件。http请求数增加了，但不多，现代浏览器同时并发少数http对性能没有影响。反而有优势，静态资源是会缓存的。lib，css，不需要下载，业务组件开发，src/component/js经常修改，分开打包只会让用户更新小部分，打开页面速度加快（并发下载）不会改变的lib会放在cdn
    webpack-dev-server port 
    html-plugin src/index.html template  
  babel js编译


tsx对应jsx