//共享状态树
// const appState={
//     head:{
//         text:'我是头部',
//         color:'red'
//     },
//     body:{
//         text:'我是body',
//         color:'green'
//     }
// }
// function dispatch(state,action){
//     //reducer
//     switch(action.type){
//         case 'HEAD_COLOR':
//         state.head.color=action.color
//         break;
//         case 'BODY_TEXT':
//         state.body.text=action.text
//         break;
//         default:
//         break;
//     }
// }


// function renderHead(state){
//   const head=document.getElementById('head');
//   head.innerText=state.head.text;
//   head.style.color=state.head.color;
// }
// function renderBody(state){
//   const body=document.getElementById('body');
//   body.innerText=state.body.text;
//   body.style.color=state.body.color;
//   dispatch(state,{type:'BODY_TEXT',text:'我是经过dispatch调用后的'});
// }
// function renderApp(state){
//     renderHead(state);
//     renderBody(state);
// }
// renderApp(appState);



import {state} from './redux/state';
import {storeChange} from './redux/storeChange';
import {createStore} from './redux/createStore';

const {store,dispatch}=createStore(state,storeChange);

function renderHead(state){
    const head=document.getElementById('head');
    head.innerText=state.text;
    head.style.color=state.color;
}
function renderBody(state){
    const body=document.getElementById('body');
    body.innerText=state.text;
    body.style.color=state.color;
}
function renderApp(store){
    renderHead(store.head);
    renderBody(store.body);
}

renderApp(store);
dispatch({type:'BODY_TEXT',text:'我是调用dispatch修改后的'});
console.log(store);
renderApp(store);