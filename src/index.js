import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/HomePage';
import Profile from './components/Profile';
import Header from './components/Header';
import Registration from './components/Registration';
import Settings from './components/Settings';
import store from './state'


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Header}>
                <IndexRoute component={App}/>
                <Route path="signin" component={Registration}/>
                <Route path="settings" component={Settings}/>
                <Route path=":user" component={Profile}/>
            </Route>

        </Router>
    </Provider>,
    document.getElementById('root')
);
