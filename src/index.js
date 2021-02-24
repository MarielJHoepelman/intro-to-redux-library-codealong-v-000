// ./src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import shoppingListItemReducer from "./reducers/shoppingListItemReducer.js";
import App from "./App";
import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; 
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
>>>>>>> 035dd708c124ee616823893a51edb77f69d7610b

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
