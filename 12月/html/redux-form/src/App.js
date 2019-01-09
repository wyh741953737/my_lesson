import React, { Component } from 'react'
import Posts from './components/Posts'
import PostForm from './components/postForm'
export default class App extends Component {
  render() {
    return (
      <div>
          {/* 添加内容之后展示在组件，数据就是状态，点击添加，把对应状态在action分发
        组件里获取最新状态展示 */}
        <PostForm/>
        <Posts/>

      </div>
    )
  }
}
