/**
 * Created by Artsiom_Rakitski on 4/6/2016.
 */
import React from 'react';
import {login} from '../actions';
import {connect} from 'react-redux'
var SignIn = React.createClass({
    onLogInClick: function () {
        var name = this.refs.username.value;
        var password = this.refs.password.value;
        if (name && password !== '') {
            this.props.dispatch(login({login: name, password: password}));
        }
        this.refs.password.value = '';
        this.refs.username.value = '';

    },
    render: function () {
        return (
                <div className="RowFlex SignColore">
                     <div className="SignUp">
                     <div className="SignInTextCompany">J O B B O X</div>
                     <div className="SignInTextDisription">frilans service</div>
                     <button className="SignBtton SignUpButton">Sign up</button>
                     </div>
                     <div className="SignIn">
                        <div className="PaddingSignIn">
                            <div className="SignInTextRight">USERNAME</div>
                            <div>
                                <input className="SignInput" type="text" ref="username" placeholder="Write..."/>
                            </div>
                            <div className="SignInTextRight">PASSWORD</div>
                            <div>
                                <input className="SignInput" type="password" ref="password" placeholder="Write..."/>
                            </div>
                            <button className="SignBtton SignInButton"
                                    onClick={this.onLogInClick}
                            >
                                Sign in
                            </button>
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
)(SignIn);
