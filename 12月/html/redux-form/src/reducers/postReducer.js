import {NEW_POST} from '../action/types';
import {FETCH_POSTS} from '../action/types';
const initialState={
    items:[],
   item:{}
}
export default function (state=initialState,action){
    switch(action.type){
        case FETCH_POSTS:
        return {
            ...state,
            items:action.payload
        }
        default: return state;
        case NEW_POST:
        return {
            ...state,
            item:action.payload
        }
        default: return state;
    }
}