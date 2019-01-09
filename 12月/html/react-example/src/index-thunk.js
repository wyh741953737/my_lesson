import React from 'react';
import ReactDOM from 'react-dom';
import App from './App-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import { Provider } from 'react-redux';

const reducers = combineReducers({
  films: (state = [], action) => {
        let { type, payload } = action;
        switch(action.type) {
      case "GET_FILM_DATA":
        return payload;
      default:
        return state;
    }
  }
})

const store = createStore(reducers, applyMiddleware(ReduxThunk,ReduxLogger));
ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));






// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore, combineReducers} from 'redux';
// import App from './App';

// const reducers=combineReducers({
//     films:(state=[],action)=>{
//         let {type,payload}=action;
//         switch(type){
//             case 'GET_FILM_DATA':
//             var newS=[...state,...payload];//将之前的状态展开
//             newS=payload;//将新数据赋值给newS
//             return newS;
//             default:
//             return state;
//         }

//     }
// })
// const store=createStore(reducers);
// function reducerPage(){
//     ReactDOM.render(<App store={store} />, document.getElementById('root'));
// }
// reducerPage();
// store.subscribe(reducerPage);

