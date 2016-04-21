/**
 * Created by Artsiom_Rakitski on 4/6/2016.
 */
import React from 'react';
import {login} from '../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Message from './ErrorMessage';
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
        let panel = function (a, onLogInClick) {
        switch (a) {
            case 'employee':
                return (
                  <div className="RowFlex SignColoreEmployee">
                    <div className="SignUp">
                      <div className="SignInTextCompany">J O B B O X</div>
                      <div className="SignInTextDisription">Go in frilans service how User now.</div>
                      <Link to='/signup'>
                        <button className="SignBtton SignUpButton">Sign up</button>
                      </Link>
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
                    <div className="InputCheckBoxText">
                          <button className="SettingDontKnow">I forgot my password </button>
                    </div>
                        <button className="SignBtton SignInButton"
                        onClick={onLogInClick}>
                          Sign in
                        </button>
                    </div>
                  </div>
                </div>
            );
            case 'company':
                return (
                      <div className="RowFlex SignColoreCompany">
                          <div className="SignUp">
                            <div className="SignInTextCompany">J O B B O X</div>
                            <div className="SignInTextDisription">Go in frilans service how Company.</div>
                            <Link to='/signup'>
                              <button className="SignBtton SignUpButton">Sign up</button>
                            </Link>
                          </div>
                          <div className="SignIn">
                            <div className="PaddingSignIn">
                              <div className="SignInTextRight">USERNAME COMPANY</div>
                              <div>
                                <input className="SignInput" type="text" ref="username" placeholder="Write..."/>
                              </div>
                            <div className="SignInTextRight">PASSWORD</div>
                            <div>
                              <input className="SignInput" type="password" ref="password" placeholder="Write..."/>
                            </div>
                            <div className="InputCheckBoxText">
                              <button className="SettingDontKnow">I forgot my password </button>
                            </div>
                              <button className="SignBtton SignInButton"
                              onClick={onLogInClick}>
                                Sign in
                                </button>
                              </div>
                            </div>
                          </div>
                );
            default:
                return null;
      }
  };
            return (
            <div className="SelectionSign">
               <Message status={this.props.status}/>
               <div className="BlockSelectionSign">
                 <button className="ButtonSelectionEmployee" id="employee" onClick={this.Vibor}>Users</button>
               </div>
               <div className="BlockSelectionSign">
                 <button className="ButtonSelectionСompany" id="company"  onClick={this.Vibor}>Company</button>
               </div>

                {panel(this.state.panel, this.onLogInClick)}
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
