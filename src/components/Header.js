import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {Link, browserHistory} from 'react-router';
import '../../css/header-footer.css';
var App = React.createClass({
    getInitialState: function () {
        return {open: false};
    },
    componentWillMount() {
        // this.props.dispatch(Actions.InitialUser());
        this.props.actions.InitialUser();
    },

    goTo: function () {

        console.log(this.props);
    },
    render: function () {
        return (
              <div className='app'>
                  <Header user={this.props.user} signout={() => this.props.actions.signout()}/>
                  {this.props.children}
                  <Footer/>
            </div>
        );
    }
});
const Header = React.createClass({
    SignOut: function () {
        console.log('hi')
        this.props.signout();
    },
    render() {
        let panel = function (Click, props, goTo) {
            if (props.user.login == null) {
                return (
                    <div className="LeftBtnPanel">
                        <div className="MenuRightBtn"
                             onClick={() => browserHistory.push(`/search`)}
                        >
                            Search
                        </div>
                        <Link to="signup">
                            <div className="MenuRightBtn">signup</div>
                        </Link>
                        <Link to="signin">
                            <div className="MenuRightBtn">signin</div>
                        </Link>
                    </div>
                );
            } else {
                return (
                    <div className="LeftBtnPanel">
                        <div className="MenuRightBtn"
                             onClick={() => browserHistory.push('/search')}
                        >
                            Search
                        </div>
                        <div className="MenuRightBtn"
                             onClick={Click}
                        >
                            signout
                        </div>
                        <div className="MenuRightBtn"
                             onClick={() => browserHistory.push(`/${props.user._id}`)}
                        >
                            {props.user.login}
                        </div>

                    </div>
                );
            }
        };
        return (
            <div className="Nav">
                <div className="Menu RowFlex">
                    <Link to="/">
                        <div className="MenuLeftBtn MenuBtn">JobBox</div>
                    </Link>
                    {panel(this.SignOut, this.props, this.goTo)}
                </div>
            </div>
        );
    }
});
const Footer = React.createClass({
    render() {
        return (
            <div className="footer">
                <div className="FooterButtonPosition">
                    <Link to="/about">
                        <div className="FooterButton">
                            About
                        </div>
                    </Link>
                    <div className="FooterButton">
                        Support
                    </div>
                    <div className="FooterButton">
                        Version 0.1.1
                    </div>
                </div>
                <div>&copy; 220V</div>
            </div>
        );
    }
});
function states(state) {
    return {
        user: state.user
    };
}

function actions(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}
export default connect(states, actions)(App);
