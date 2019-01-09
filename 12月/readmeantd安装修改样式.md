antd-test项目

1，yarn add antd
2，修改 src/App.js，引入 antd 的按钮组件。
3，修改 src/App.css，在文件顶部引入 @import "~antd/dist/antd.css"。
运行后，上面的例子实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。

解决：
对 create-react-app 的默认配置进行自定义，这里我们使用 react-app-rewired （一个对 create-react-app 进行自定义配置的社区解决方案）。

1，yarn add react-app-rewired
2，修改配置
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
3，然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。
module.exports = function override(config, env) {
  return config;
};

4，babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件（原理），现在我们尝试安装它并修改 config-overrides.js 文件。
先：yarn add babel-plugin-import
再修改
+ const { injectBabelPlugin } = require('react-app-rewired');
  module.exports = function override(config, env) {
+   config = injectBabelPlugin(
+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
+     config,
+   );
    return config;
  };

  5，然后移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 样式代码，并且按下面的格式引入模块。
  import { Button } from 'antd';
  最后重启 yarn start 访问页面，antd 组件的 js 和 css 代码都会按需加载，你在控制台也不会看到这样的警告信息




 定义主题#
自定义主题需要用到 less 变量覆盖功能。引入 react-app-rewire 的 less 插件，同时修改 config-overrides.js 文件。
先：yarn add react-app-rewire-less
const { injectBabelPlugin } = require('react-app-rewired');
+ const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
    config = injectBabelPlugin(
+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], 
      config,
    );
+   config = rewireLess.withLoaderOptions({
+     modifyVars: { "@primary-color": "#1DA57A" },
+     javascriptEnabled: true,
+   })(config, env);
    return config;
  };




  自定义：
@primary-color: #1890ff;                         // 全局主色
@link-color: #1890ff;                            // 链接色
@success-color: #52c41a;                         // 成功色
@warning-color: #faad14;                         // 警告色
@error-color: #f5222d;                           // 错误色
@font-size-base: 14px;                           // 主字号
@heading-color: rgba(0, 0, 0, .85);              // 标题色
@text-color: rgba(0, 0, 0, .65);                 // 主文本色
@text-color-secondary : rgba(0, 0, 0, .45);      // 次文本色
@disabled-color : rgba(0, 0, 0, .25);            // 失效色
@border-radius-base: 4px;                        // 组件/浮层圆角
@border-color-base: #d9d9d9;                     // 边框色
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);  // 浮层阴影