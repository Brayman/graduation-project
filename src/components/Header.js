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
        this.props.actions.InitialUser();
    },
    render() {
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
        this.props.signout();
    },
    render() {
        let panel = function (Click, props) {
            if (props.user.login == null) {
                return (
                    <div className="LeftBtnPanel">
                        <div className="MenuRightBtn"
                             onClick={() => browserHistory.push(`/search`)}
                        >
                            поиск
                        </div>
                        <Link to="signup">
                            <div className="MenuRightBtn">регистрация</div>
                        </Link>
                        <Link to="signin">
                            <div className="MenuRightBtn">вход</div>
                        </Link>
                    </div>
                );
            } else {
                return (
                    <div className="LeftBtnPanel">
                        <div className="MenuRightBtn"
                             onClick={() => browserHistory.push('/search')}
                        >
                            поиск
                        </div>
                        <div className="MenuRightBtn"
                             onClick={Click}
                        >
                            выход
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
                    {panel(this.SignOut, this.props)}
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
                            О нас
                        </div>
                    </Link>
                    <Link to="/map">
                        <div className="FooterButton">
                            карта
                        </div>
                    </Link>
                    <div className="FooterButton">
                        Версия 0.1.1
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
