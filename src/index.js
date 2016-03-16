import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './components/HomePage';
import store from './state'


ReactDOM.render(<App/>,document.getElementById('root'));
