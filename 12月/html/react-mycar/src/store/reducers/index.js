import {combineReducers} from 'redux'
import floatCartReducer from './floatCartReducer'
import updateCartReducer from './updateCartReducer'
import productReducer from './productReducer'
export default combineReducers({
    products:productReducer,  //商品
    cartProducts:floatCartReducer, //购物车商品 
    cartTotal:updateCartReducer  //商品总价
    // sort:sortReducers,
    // filters:filterReducer
})