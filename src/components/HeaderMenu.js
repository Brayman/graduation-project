var React = require('react');

var HeaderMenu = React.createClass({
render: function() {
return (
  <nav className="navbar navbar-inverse nav-pills navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header fuck1 hover">
        <a className="navbar-brand hover" href="#"><img className="icon" src="http://www.max4.pl/allegro/imagesdg/package.png" alt="icon"/> </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className="hover">
            <a href="#"><p className="glyphicon glyphicon-search colorWhite fuck2"></p></a>
          </li>
          <li className="hover">
            <a href="#"><span className="glyphicon glyphicon-envelope badge"> 1</span></a>
          </li>
          <li className="dropdown hover">
            <a href="#"><p className="colorWhite fuck2">Name <img className="icon" src="http://i2.wp.com/forum.assassin.ir/public/style_images/bluegiant/profile/default_large.png" alt="avatar"/></p></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
  }
});

export default HeaderMenu;
