import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Routes';
import { Navbar } from './Components';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <Provider store={store}>
                <Routes />
        </Provider>

        , document.getElementById('root'));
registerServiceWorker();
