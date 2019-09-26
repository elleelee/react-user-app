// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// internal modules
import "./stylesheets/index.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

// Reducers
import usersReducer from "./reducers/users_reducer";
import accountsReducer from "./reducers/accounts_reducer";
import selectedUserReducer from "./reducers/selected_user_reducer";
import filterReducer from "./reducers/filter_reducer";


const reducers = combineReducers({
  users: usersReducer,
  accounts: accountsReducer,
  selectedUser: selectedUserReducer,
  filter: filterReducer
});

// Middlewares
const middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
