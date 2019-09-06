import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducer';

const initialState = {
  todo:  localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  localStorage.setItem('todo', JSON.stringify(store.getState().todo))
});

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
