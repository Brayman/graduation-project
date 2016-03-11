var React = require('react');

var ListInfo = React.createClass({
render: function() {
return (
<div className="block">
  <div className="panel-body">
    <div className="media">
        <h4 className="media-heading">Name <span className="badge">1 rating</span><img src="https://i.ytimg.com/vi/NI59dxzgj-8/maxresdefault.jpg" alt="..." className="right ImageSmall"/></h4>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>
    );
  }
});

export default ListInfo;
