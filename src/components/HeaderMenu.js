var React = require('react');
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions'
import {Link} from 'react-router'
var HeaderMenu = React.createClass({
    render: function() {
        let action=bindActionCreators(Actions, this.props.dispatch);
        return (
<div>
<div className="PanelForMenu">
  <div className="Menu">
    <div>
      <Link to="/">
      <img className="Image ImgStyleM"
      src="https://lh6.googleusercontent.com/-IzoUthdKiYA/Vull4PO5fXI/AAAAAAAAAA4/zDoB0OTDEg4sO06rl02kuvvFuENEq9_-Q/s256-p/logo.png"/>
      </Link>
    </div>
    <div className="DFlex">
      <i className="Icon IconStyleM">search</i>
      <i className="Icon IconStyleM">mail</i>
      <Login userData={{name: this.props.userData.name, username: this.props.userData.username}}
           //logInClick={data=>this.props.dispatch(login(data))}/>
           logInClick={data=>action.login(data)}/>
    </div>
  </div>
</div>
  {this.props.children}
</div>
        );
      }
});
var Login = React.createClass({
    onLogInClick: function(){
        var name = this.refs.username.value;
        var password = this.refs.password.value;
        this.refs.password.value='';
        this.refs.username.value='';
        this.props.logInClick({username: name, password: password});
    },
    render: function() {
        var login;
        if(this.props.userData.username==null){
            login=<ul className="menu">
              <li><button className="Button BtnStyleM menu">Sign</button>
                <ul>
                  <li><a className="RowBetween">
                    <div className="TextStyleM">Username</div>
                    <div><input tute="text" ref="username" className="Label InputStyleM"/></div>
                  </a></li>
                  <li><a className="RowBetween">
                    <div className="TextStyleM" >Password</div>
                    <div><input tute="text" ref="password" className="Label InputStyleM"/></div>
                  </a></li>
                  <li>
                    <button className="Button Sign WhiteBtn" onClick={this.onLogInClick}>Sign in</button>
                    <div className="TextStyleM">
                        or
                    </div>
                    <Link to="/signin">
                          <button className="Button Sign GreenBtn">Sign up</button>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
        }
        else {
            login=<Link to={"/"+this.props.userData.username}>
                <div className="Hover">
                                <span className="MenuTextName">
                                    {this.props.userData.name || this.props.userData.username}
                                  </span>
                    <img className="LolImage Square Circle"
                         src="https://lh3.googleusercontent.com/-2ISHLNjuIts/Vull4KcLT-I/AAAAAAAAAA8/iC8vzN3ycTU8McfvZzA5iZ700Sezpddiw/w595-h334-no/Non.png"
                         alt="Avatar"/>
                </div>
            </Link>
        }
        return (
            <div>
                {login}
            </div>
        )
    }
});

export default connect(
    (state)=> {return{
        userData: state.userData
    }})(HeaderMenu)
