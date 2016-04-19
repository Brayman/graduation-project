import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {Link} from 'react-router';
var Header = React.createClass({
    getInitialState: function () {
        return {open: false};
    },
    componentWillMount() {
        this.props.dispatch(Actions.InitialUser());
    },
    Click: function (e) {
        this.setState({open: !this.state.open});
        if (e.target.id === 'out') {
            this.props.dispatch(Actions.signOut());
        }
    },
    render: function () {
        var action = bindActionCreators(Actions, this.props.dispatch);
        let panel = function (Click, userData) {
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
                        <div className="MenuRightBtn">Search</div>
                        <Link to="signin">
                            <div className="MenuRightBtn">Message</div>
                        </Link>
                        <div className="MenuRightBtn"
                             id="out"
                             onClick={Click}
                        >
                            signout
                        </div>
                        <Link to={'/' + userData._id}>
                            <div className="MenuRightBtn">
                                {userData.login}
                            </div>
                        </Link>
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

                        {panel(this.Click, this.props.userData)}
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
