import {combinReducers} from 'redux'
import postReducer from './postReducer'
 export default combinReducers ({
     posts:postReducer
 })