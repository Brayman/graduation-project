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
                  <div className="content signin">
                    <div className="SignUp">
                      <div className="SignInTextCompany">J O B B O X</div>
                      <div className="SignInTextDisription">Фриланс сервис для компаний</div>
                      <div className="SignInTextDisription">и работников.</div>
                      <Link to='/signup'>
                        <button className="SignBtton SignUpButton">Регистрация</button>
                      </Link>
                    </div>
                    <div className="SignIn">
                     <div className="PaddingSignIn">
                        <div className="SignInTextRight">Логин</div>
                         <input className="SignInput" type="text" ref="username"/>
                      <div className="SignInTextRight">Пароль</div>
                        <div>
                         <input className="SignInput" type="password" ref="password"/>
                        </div>
                        <div className="SettingDontKnow">
                          <button className="SettingDontKnow">Я забыл свой пароль</button>
                        </div>
                        <button className="SignBtton SignInButton"
                        onClick={this.onLogInClick}>
                          Войти
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
