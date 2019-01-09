import React, { Component } from 'react';
// 在组件中static一定要传参
import PropTypes from 'prop-types';
import Body from './component/body/Body'
import Head from './component/Head/Head'
import {createStore,storeChange} from './redux'

class App extends Component {
  // 在这个属性里面的值，在内部 打破层次，拿到在顶级组件中的共享的状态
  // static childContextTypes ={
  //   store:PropTypes.object,
  //   dispatch:PropTypes.func,
  //   subscribe:PropTypes.func,
  //   getStore:PropTypes.func
  // }
  // getChildContext(){
   
  //   const {store,dispatch,subscribe,getStore} =createStore(state,storeChange);
  //   return{store,dispatch,subscribe,getStore}
  // }
  
  render() {
    return (
      <div className="App">
        <Head></Head>
        <Body></Body>
      </div>
    );
  }
}

export default App;