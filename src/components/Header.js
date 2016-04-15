import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {Link} from 'react-router';
var Header = React.createClass({
    getInitialState: function () {
        return {open: false};
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
                        <div className="MenuRightBtn">Search</div>
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
                {this.props.children}
                <div className="Van">
                  <div className="Footer">
                    <div className="DFlex FooterButtonPosition">
                      <div className="FooterButton">
                        Aboute
                      </div>
                      <div className="FooterButton">
                        Support
                      </div>
                      <div className="FooterButton">
                        Version
                      </div>
                    </div>
                    <div>&copy; JobBox</div>
                  </div>
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
