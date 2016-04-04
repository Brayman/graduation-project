var React = require('react');
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions'
import {Link} from 'react-router'
var Header = React.createClass({
    getInitialState: function(){
        return{open: false}
    },
    Click: function(){
        this.setState({open:!this.state.open})
    },
    render: function() {
        let action=bindActionCreators(Actions, this.props.dispatch);
        let panel=<div className="LeftBtnPanel">
            <div className="MenuRightBtn">Search</div>
            <Link to="signin">
                <div className="MenuRightBtn">sigup</div>
            </Link>
            <div className="MenuRightBtn"
                 onClick={this.Click}
            >
                sigin
            </div>
            <Link to={'/'+this.props.userData.username}>
                <div className="MenuRightBtn">
                    {this.props.userData.username}
                </div>
            </Link>
        </div>;
        return (
            <div>
                <div className="Nav">
                    <div className="Menu RowFlex">
                        <Link to="/">
                            <div className="MenuLeftBtn MenuBtn">JobBox</div>
                        </Link>

                        {panel}
                    </div>
                </div>
                <LoginPanel open={this.state.open} logInClick={data=>action.login(data)}/>
                {this.props.children}
            </div>
        );
    }
});

var LoginPanel = React.createClass({
    onLogInClick: function(){
        var name = this.refs.username.value;
        var password = this.refs.password.value;
        if(name&&password!==''){
            this.props.logInClick({username: name, password: password});
        }
        this.refs.password.value='';
        this.refs.username.value='';

    },
    render: function() {
        if(this.props.open){
            return(
                <div className="RowFlex SignColore">
                    {/*<div>
                        <div className="SignInTextCompany">J O B B O X</div>
                        <div className="SignInTextDisription">frilans service</div>
                        <button className="SignBtton SignUpButton">Sign up</button>
                    </div>*/}
                    <div>
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
            )
        }
        else {
            return null
        }
    }
});
export default connect(
    (state)=> {return{
        userData: state.userData
    }})(Header)