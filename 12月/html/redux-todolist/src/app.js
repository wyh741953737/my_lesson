import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux';
import configStore from './store';
import Index from './pages/index'
import './app.css'
import React, { Component } from 'react'

const store = configStore();
class App extends Component {
  // class Posts extends Component {
// constructor(props){
//   super(props);
//   this.state={
//     posts:[]
//   }
// }
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }
  componentDidMount () {  }
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
         <Index />
       </Provider>
    )
  }
}
 Taro.render(<App />, document.getElementById('app'))
