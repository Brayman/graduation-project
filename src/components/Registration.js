var React = require('react');
import {connect} from 'react-redux';
import {registration} from '../actions';
import '../../css/signup.css';

var Registration = React.createClass({
    render: function () {
        return (
            <div className="content RegBlok">
                <div className="text">
                    <div className="TextRegCompany">JobBox</div>
                    <div className="TextRegInfo">Информационный фриланс сервер</div>
                    <div className="TextRegInfo">для работников и компаний.</div>
                </div>
                <Inputs registrData={data => this.props.dispatch(registration(data))}/>
            </div>
        );
    }
});
var Inputs = React.createClass({
    getInitialState: function () {
        return {err: null, company: false};
    },
    GetValues: function () {
        var name = this.refs.username.value;
        var mail = this.refs.email.value;
        if (name && mail !== null) {
            if (this.refs.password.value === this.refs.password2.value) {
                var password = this.refs.password.value;
                this.props.registrData({company: this.state.company, login: name, name: name, contacts: {mail: mail}, password: password});
            } else {
                this.setState({err: 'пароли не совпадают'});
            }
        }

        this.refs.password.value = '';
        this.refs.email.value = '';
        this.refs.username.value = '';
    },
    render: function () {
        return (
            <div>

                <div>
                    <input className="InputReg" type="text" ref="username" placeholder="Введите ваш юзернейс"/>
                </div>
                <div>
                    <input className="InputReg"
                           type="email"
                           ref="email"
                           placeholder="Введите e-mail адрес"
                    />
                </div>
                <div style={{backgroundColor: 'red'}}
                     onClick={()=>{
                         this.setState({err: null});
                     }}
                >
                    {this.state.err}
                </div>
                <div>
                    <input className="InputReg" type="password" ref="password" placeholder="Придумайте пароль"/>
                </div>
                <div>
                    <input className="InputReg" type="password" ref="password2" placeholder="Повтарите пароль"/>
                </div>
                <div className="InputCheckBoxText">
                  <div className="toggle">
                      <input type="checkbox" id="checktoggle"
                      onClick={(e) => {
                          console.log(e.target.checked);
                          this.setState({company: e.target.checked});
                      }}/>
                      <label htmlFor="checktoggle"></label>
                  </div>Зарегистрироваться как компания
                </div>
                <div>
                        <button onClick={this.GetValues}
                                className="BtnReg">Sign up for JobBox</button>
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
)(Registration);
/**
 * Created by Artsiom_Rakitski on 3/21/2016.
 */
