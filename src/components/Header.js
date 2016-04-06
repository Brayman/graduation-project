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
            if (userData.username == null) {
                return (
                    <div className="LeftBtnPanel">
                        <div className="MenuRightBtn">Search</div>
                        <Link to="signup">
                            <div className="MenuRightBtn">signup</div>
                        </Link>
                        <Link to="signin">
                            <div className="MenuRightBtn">signin</div>
                        </Link>
                        <Link to={'/' + userData.username}>
                            <div className="MenuRightBtn">
                                {userData.username}
                            </div>
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
                        <Link to={'/' + userData.username}>
                            <div className="MenuRightBtn">
                                {userData.username}
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
