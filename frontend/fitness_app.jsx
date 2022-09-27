import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './actions/session_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

    window.login = login;
    window.dispatch = store.dispatch;
})
