import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunkMiddleware from "redux-thunk";
// import rootReducer from "./components-todo-redux/reducers";

// 最简单的todo应用
// import App from './components-todo/App'; 
// ReactDOM.render(<App />, document.getElementById('root'));

// redux的todo应用
// import App from "./components-todo-redux/components/App";
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// react-router简单使用
import App from "./components-react-router/App";
ReactDOM.render(<App />, document.getElementById("root"));

