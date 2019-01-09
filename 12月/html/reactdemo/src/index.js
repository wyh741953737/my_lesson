import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
//actionTypes部分，声明动作类型
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

//state get函数，可以对state进行返回，或者追加修饰
const getVisibility = state => state.visible;
const getCounterValue = state => state.counter.value;

//计数reducer，判断动作类型，动作做什么
const counterReducer = function(state = {value: 0}, action) {
  if (action.type === ADD) {
    return { value: state.value + 1 }
  } else if (action.type === SUBTRACT) {
    return { value: state.value - 1 }
  }
  return state;
}

//是否可见reducer，判断是否可见
const visibilityReducer = (state = true, action) => {
  if (action.type == CHANGE_VISIBILITY) {
    return action.visible
  }
  return state;
}

//合并reducer
const rootReducer = combineReducers({
  visible: visibilityReducer,
  counter: counterReducer
})
//初始化可见状态。
const initialState = {
  visible: true
}

//声明action 返回具体动作。
const add = () => ({type: ADD});
const subtract = () => ({type: SUBTRACT});
const changeVisibility = (visible) => ({
  type: CHANGE_VISIBILITY,
  visible
})
//创建一个store仓库。接受三个参数reducer, preloadedState, enhancer，
//如果我们第二个参数是函数类型，createStore会认为你忽略了preloadedState而传入了一个enhancer，
//如果我们传入了一个enhancer，createStore会返回enhancer(createStore)(reducer, preloadedState)的调用结果，这是常见高阶函数的调用方式。
const store = createStore(rootReducer, initialState);

//计数器的函数Counter，三个参数
function Counter({ value, add, subtract }) {
  return (
    <div>
      <p>Value: { value }</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  )}
// redux 核心 不管层级， 向redux 发出请示
const CounterConnected = connect(state => ({
  value: getCounterValue(state)
}), 
dispatch => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract())
}))(Counter);
//
const Visibility = ({changeVisibility}) => (
    <div>
        <button onClick={() => changeVisibility(true)}>Visible</button>
        <button onClick={() => changeVisibility(false)}>Hidden</button>
    </div>
  )
  const VisibilityConnected = connect(null, dispatch => ({
    changeVisibility: value => dispatch(changeVisibility(value))
  }))(Visibility);
  
const App =  ({ visible }) => (
  <div>
      <VisibilityConnected/>
      { visible && <CounterConnected />}
  </div>
);
const AppConnected = connect(
  state => ({
    visible: getVisibility(state)
  })
)(App);



ReactDOM.render(<Provider store={store}>
  <AppConnected />
  </Provider>, document.getElementById('root'))