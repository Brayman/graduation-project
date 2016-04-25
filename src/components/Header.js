import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import {Link, browserHistory} from 'react-router';
var Header = React.createClass({
    getInitialState: function () {
        return {open: false};
    },
    componentWillMount() {
        this.props.dispatch(Actions.InitialUser());
    },
    Click: function () {
        this.props.dispatch(Actions.signout());
    },
    goTo: function () {
        browserHistory.push(`/${this.props.userData._id}`);
    },
    render: function () {
        let panel = function (Click, userData, goTo) {
            if (userData.login == null) {
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
                                 onClick={goTo}
                            >
                                {userData.login}
                            </div>

                    </div>
                );
            }
        };
        return (
              <div>
                <div className="Nav">
                    <div className="Menu RowFlex">
                        <Link to="/">
                            <div className="MenuLeftBtn MenuBtn">JobBox</div>
                        </Link>

                        {panel(this.Click, this.props.userData, this.goTo)}
                    </div>
                </div>
                <div className="demo">
                {this.props.children}
                </div>
                  <div className="footer">
                    <div className="DFlex FooterButtonPosition">
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


export default connect(
    (state)=> {
        return {
            userData: state.userData
        };
    }
)(Header);
