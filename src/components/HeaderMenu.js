var React = require('react');
import {connect} from 'react-redux'
import {Link} from 'react-router'
var HeaderMenu = React.createClass({
render: function() {
return (
  <div>
      <div className="Nav">
          <div className="Menu">
              <div className="Hover">
                  <Link to="/">
                      <img className="LolImage"
                           src="https://lh6.googleusercontent.com/-IzoUthdKiYA/Vull4PO5fXI/AAAAAAAAAA4/zDoB0OTDEg4sO06rl02kuvvFuENEq9_-Q/s256-p/logo.png"
                           alt="Logo"
                      />
                  </Link>
              </div>
              <div className="MenuRight">
                  <div className="Hover">
                      <img className="LolImage"
                           src="https://lh3.googleusercontent.com/-_s9ls0NuuBs/Vull4W1SYrI/AAAAAAAAABA/6wERcNgCmZoQbRWEZ6OUSkipE970gMbaw/w126-h125-p/search.png"
                           alt="Searsh"/>
                  </div>
                  <div className="Hover">
                      <div className="Sms"></div>
                      <div className="MenuTextSms">
                          1
                      </div>
                  </div>
                  <Link to="/registr">
                  <div className="Hover">
                    <span className="MenuTextName">
                        {this.props.userData.name || this.props.userData.username}
                      </span>
                      <img className="LolImage Square Circle"
                           src="https://lh3.googleusercontent.com/-2ISHLNjuIts/Vull4KcLT-I/AAAAAAAAAA8/iC8vzN3ycTU8McfvZzA5iZ700Sezpddiw/w595-h334-no/Non.png"
                           alt="Ava"/>
                  </div></Link>
              </div>
          </div>
      </div>
      {this.props.children}
  </div>
    );
  }
});

export default connect(
    (state)=> {return{
        userData: state.userData
    }})(HeaderMenu)
