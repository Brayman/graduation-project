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
    Click: function () {
        this.props.actions.signout();
    },
    goTo: function () {

        console.log(this.props);
    },
    render: function () {
        return (
              <div className='app'>
                  <Header userData={this.props.userData}/>
                  {this.props.children}
                  <Footer/>
            </div>
        );
    }
});
const Header = React.createClass({
    render() {
        let panel = function (Click, props, goTo) {
            if (props.userData.login == null) {
                return (
                    <div className="LeftBtnPanel">
                        <div className="MenuRightBtn"
                             onClick={() => props.actions.openSearch()}
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
                        <Link to="signin">
                            <div className="MenuRightBtn">Message</div>
                        </Link>
                        <div className="MenuRightBtn"
                             id="out"
                             onClick={Click}
                        >
                            signout
                        </div>

                        <div className="MenuRightBtn"
                             onClick={() => browserHistory.push(`/${props.userData._id}`)}
                        >
                            {props.userData.login}
                        </div>

                    </div>
                );
            }
        };
        return(
            <div className="Nav">
                <div className="Menu RowFlex">
                    <Link to="/">
                        <div className="MenuLeftBtn MenuBtn">JobBox</div>
                    </Link>

                    {panel(this.Click, this.props, this.goTo)}
                </div>
            </div>
        )
    }
});
const Footer = React.createClass({
    render() {
        return(
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
        )
    }
});
function states(state) {
    return {
        userData: state.userData
    };
}

function actions(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}
export default connect(states, actions)(App);
