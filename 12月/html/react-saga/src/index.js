import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import Counter from './Counter';
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'


const sagaMiddleware=createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(reduxLogger,sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action=type=>store.dispatch({type});

// doAsyncIncrement(()=>{
//     //在业务中的异步，超出了redux的范畴。
//     setTimeout(() => {
//         action('INCREMENT_ASYNC');
//     }, 1000);
// },
function render () {
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement={()=>action('INCREMENT')}
      onDecrement={()=>action('DECREMENT')}
      onIncrementAsync={()=>action('INCREMENT_ASYNC')}
      onDecrementAsync={()=>action('DECREMENT_ASYNC')}
      />,
    document.getElementById('root')
  );
}
render();
store.subscribe(render)