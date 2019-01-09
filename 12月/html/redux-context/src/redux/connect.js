import React, { Component } from 'react';
import PropTypes from 'prop-types';
export const connect = (Comp,propTypes) => {
       //在函数内定义了一个组件Connect,Comp在该组件里面显示
  class Connect extends Component {
      static contextTypes={
          store:PropTypes.object,
          dispatch:PropTypes.func,
          subscribe:PropTypes.func,
          //返回那棵树的方法。
          getStore:PropTypes.func,
          ...propTypes
      }
      constructor(props){
          super(props)
          this.state={
              dispatch:()=>{
              }
          }
      }
      componentWillMount(){
          const {subscribe,dispatch}=this.context;
          this.setState({
              dispatch
          })
          this._upstate();
        subscribe(()=>this._upstate())
    }
      _upstate(){
          const {getStore}=this.context;
          this.setState({
            ...getStore()
          })
      }
    render () {
      return (
        <div className="connect">
          <Comp {...this.state} /> 
        </div>
      )
    }
  }
  return Connect;//高阶组件
}