import React from "react";


import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
//引入redux-devtools-extension的可视化工具（有点吊）
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
//redux 异步处理方案 可以在action 里传入 dispatch getState
import thunk from "redux-thunk";
import reducer from "./reducers";
import { getAllProducts } from "./actions";
import App from "./containers/App.jsx";
import "./index.css";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
