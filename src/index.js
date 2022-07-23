// Librairies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Composant
import App from './App-base';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import minionsReducer from './store/reducers/minions';
import saveReducer from './store/reducers/save';
import thunk from 'redux-thunk';

// Combine les reducers
const reducer = combineReducers({
  minion: minionsReducer,
  save: saveReducer
});

// Création du middleware
const middleware = (store) => {
  return (next) => {
    return (action) => {

      console.log(action);

      return next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
