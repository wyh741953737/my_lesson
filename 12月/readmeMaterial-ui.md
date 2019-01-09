Material-UI是一个实现了Google's Material Design设计规范的react组件库，开箱即用，按需加载。使用它可以快速搭建出赏心悦目的应用界面。
一、安装
npm install --save material-ui@next
npm install --save material-ui-icons
使用createMuiTheme创建自定义的theme主题，用MuiThemeProvider包裹MUI组件即可让自定义主题生效。
import {MuiThemeProvider,createMuiTheme} from "Material-ui/styles"
const theme=createMuiTheme({})

在类里面<MuiThemeProvider theme={theme}>
Material-UI的界面设计，倾向于同时兼顾PC端和移动端。它的主题和样式可以极其灵活地进行个性化定制，Material-UI对Color和Theme进行了良好封装，采用CSS in JS可以方便地帮助我们完成个性化需求。它还支持服务端渲染。总体上，Material-UI使用还算简单，只需要我们有一定的单页面应用开发基础、会使用react，就可以快速上手。在Material-UI的Github仓库中，还有四五个demo，有助于我们参考学习。

