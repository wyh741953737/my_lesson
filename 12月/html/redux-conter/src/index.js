import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
// import App from './App';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import counter from './redurces/index';

// 单独管理状态的地方
// 状态与UI 统一的， 状态计算器 reducer 
const store = createStore(counter);

const rootEl=document.getElementById('root');

const render=()=>ReactDOM.render(
<Counter value={store.getState()} onIncrement={()=>store.dispatch({type:'INCREMENT'})}
                                  onDecription={()=>store.dispatch({type:'DECREMENT'})}
/>,rootEl);

render();
store.subscribe(render);//给仓库手动添加订阅者render
serviceWorker.unregister();

