//store负责创建一个仓库，统一唯一一颗树，
import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configStore(){
  const store = createStore(rootReducer);
  return store;
}