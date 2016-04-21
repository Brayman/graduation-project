var React = require('react');
import {connect} from 'react-redux';
import {registration} from '../actions';

var Registration = React.createClass({
    render: function () {
        return (
            <div className="RegBlok">
                <div className="text">
                    <div className="TextRegCompany">JobBox</div>
                    <div className="TextRegInfo">Frilans info service for employee </div>
                    <div className="TextRegInfo">and company.</div>
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
                this.props.registrData({company: this.state.company, login: name, contacts: {mail: mail}, password: password});
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
                    <input className="InputReg" type="text" ref="username" placeholder="Pick a username"/>
                </div>
                <div>
                    <input className="InputReg"
                           type="email"
                           ref="email"
                           placeholder="Your email address"
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
                    <input className="InputReg" type="password" ref="password" placeholder="Create a password"/>
                </div>
                <div>
                    <input className="InputReg" type="password" ref="password2" placeholder="Confirm a password"/>
                </div>
                <div className="InputCheckBoxText">
                  <div className="toggle">
                      <input type="checkbox" id="checktoggle"
                      onClick={(e) => {
                          console.log(e.target.checked);
                          this.setState({company: e.target.checked});
                      }}/>
                      <label htmlFor="checktoggle"></label>
                  </div>sign up how company
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
