import React from 'react';
import {login} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import '../../css/signin.css';
var SignIn = React.createClass({
    getInitialState: function () {
        return {settings: {}, panel: 'employee', company: false};
    },
    onLogInClick: function () {
        var name = this.refs.username.value;
        var password = this.refs.password.value;
        if (name && password !== '') {
            this.props.dispatch(login({login: name, password: password, company: this.state.company}));
        }
        this.refs.password.value = '';
        this.refs.username.value = '';

    },
    Vibor: function (e) {
        this.setState({panel: e.target.id, company: false});
        if (e.target.id === 'company') {
            this.setState({company: true});
        }
    },
    render: function () {
                return (
                  <div className="RowFlex SignColore">
                    <div className="SignUp">
                      <div className="SignInTextCompany">J O B B O X</div>
                      <div className="SignInTextDisription">Frilans service for company  and</div>
                      <div className="SignInTextDisription">employee.</div>
                      <Link to='/signup'>
                        <button className="SignBtton SignUpButton">Sign up</button>
                      </Link>
                    </div>
                    <div className="SignIn">
                     <div className="PaddingSignIn">
                        <div className="SignInTextRight">USERNAME</div>
                      <div>
                         <input className="SignInput" type="text" ref="username"/>
                      </div>
                      <div className="SignInTextRight">PASSWORD</div>
                        <div>
                         <input className="SignInput" type="password" ref="password"/>
                        </div>
                        <div className="SettingDontKnow">
                          <button className="SettingDontKnow">I forgot my password </button>
                        </div>
                        <button className="SignBtton SignInButton"
                        onClick={this.onLogInClick}>
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
              status: state.status
          };
      }
)(SignIn);
