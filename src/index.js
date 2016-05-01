import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {getProfileData} from './actions';
import App from './components/HomePage';
import Profile from './components/Profile';
import Header from './components/Header';
import Registration from './components/Registration';
import SignIn from './components/SignIn';
import Settings from './components/Settings';
import Search from './components/Search';
import SetProf from './components/ProfileSettings';
import store from './state';
import About from './components/About';


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Header}>
                <IndexRoute component={App}/>
                <Route path="signup" component={Registration}/>
                <Route path="signin" component={SignIn}/>
                <Route path="settings" component={Settings}>
                       <Route path="profile" component={SetProf} dop={store}/>
                </Route>
                <Route path="search" component={Search}/>
                <Route path="about" component={About}/>
                <Route path=":user"
                       component={Profile}
                       onEnter={user => store.dispatch(getProfileData(user))}
                />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
