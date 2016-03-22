var React = require('react');
import {connect} from 'react-redux'
import {newUser} from '../actions'

var Registration = React.createClass({
    render: function() {
        var post=this.props.news;
        return (
            <div className="RegBlok">
                <div className="text">
                    <div className="TextRegCompany">JobBox</div>
                    <div className="TextRegInfo">Frilans info service for employee </div>
                    <div className="TextRegInfo">and company.</div>
                </div>
                <Inputs  registrData={text => this.props.dispatch(newUser(text))}/>
            </div>
        )
    }
});
var Inputs = React.createClass({
    GetValues: function(){
        var name = this.refs.username.value;
        var mail = this.refs.email.value;
        var password = this.refs.password.value;
        this.props.registrData({username: name, mail: mail, password: password});
        this.refs.password.value='';
        this.refs.email.value='';
        this.refs.username.value=''
    },
    render: function() {
        return (
            <div>
                <div>
                    <input className="InputReg" type="text" ref="username" placeholder="Pick a username"/>
                </div>
                <div>
                    <input className="InputReg" type="text" ref="email" placeholder="Your email address"/>
                </div>
                <div>
                    <input className="InputReg" type="password" ref="password" placeholder="Create a password"/>
                </div>
                <div>
                    <button onClick={this.GetValues} className="BtnReg">Sign up for JobBox</button>
                </div>
            </div>
        )
    }
});

export default connect(
    (state)=> {return{
        userData: state.userData
    }})(Registration)
/**
 * Created by Artsiom_Rakitski on 3/21/2016.
 */
