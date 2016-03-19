import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/HomePage';
import Profile from './components/Profile';
import Menu from './components/HeaderMenu';
import store from './state'


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Menu}>
                <IndexRoute component={App}/>
                <Route path="profile/:user/:id" component={Profile}/>
            </Route>

        </Router>
    </Provider>,
    document.getElementById('root')
);
