var React = require('react');
import {connect} from 'react-redux'
import {registration} from '../actions'
import {Link} from 'react-router'

var Registration = React.createClass({
    render: function() {
        return (
            <div className="RegBlok">
                <div className="text">
                    <div className="TextRegCompany">JobBox</div>
                    <div className="TextRegInfo">Frilans info service for employee </div>
                    <div className="TextRegInfo">and company.</div>
                </div>
                <Inputs  registrData={data => this.props.dispatch(registration(data))}/>
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
                    <Link to="/">
                        <button onClick={this.GetValues} className="BtnReg">Sign up for JobBox</button>
                    </Link>
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
