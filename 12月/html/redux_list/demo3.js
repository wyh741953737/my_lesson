import { createStore,combineReducers } from 'redux';
var reducer_0=function(state={},action){
    switch(action.type){
        case 'SAY_SOMETHING':
        return{
            ...state,
            message:action.value
        }
        default: return state
    }
}
var userReducer=(state={},action)=>{
    switch(action.type){
        case 'DO':return{
            type:'AAA',
            data:0
        }
    }
}
var reducer=combineReducers({
   user:userReducer,
   red_0:reducer_0
})

var store=createStore(reducer);