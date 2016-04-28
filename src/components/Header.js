import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {Link, browserHistory} from 'react-router';
import '../../css/header-footer.css';
var Header = React.createClass({
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
        browserHistory.push(`/${this.props.userData._id}`);
        console.log(this.props);
    },
    render: function () {
        let panel = function (Click, props, goTo) {
            if (props.userData.login == null) {
                return (
                    <div className="LeftBtnPanel">
                        <Link to="search">
                            <div className="MenuRightBtn">Search</div>
                        </Link>
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
                        <Link to="search">
                            <div className="MenuRightBtn">Search</div>
                        </Link>
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
                                 onClick={() => props.actions.openProfile(props.userData._id)}
                            >
                                {props.userData.login}
                            </div>

                    </div>
                );
            }
        };
        return (
              <div className='app'>
                <div className="Nav">
                    <div className="Menu RowFlex">
                        <Link to="/">
                            <div className="MenuLeftBtn MenuBtn">JobBox</div>
                        </Link>

                        {panel(this.Click, this.props, this.goTo)}
                    </div>
                </div>
                  {this.props.children}
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
            </div>
        );
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
export default connect(states, actions)(Header);
