var React = require('react');

var ListInfo = React.createClass({
    render: function() {
        return (
            <div className="black" style={{marginTop: '5px'}}>
                <div className="panel-body">
                    <div className="media">
                        <h4 className="media-heading">
                            {this.props.data.username}
                            <span className="badge">
                                {this.props.data.rating} rating
                            </span>
                            <img src="https://i.ytimg.com/vi/NI59dxzgj-8/maxresdefault.jpg"
                                 alt="avatar"
                                 className="right ImageSmall"/>
                        </h4>
                        <p>{this.props.data.description}</p>
                    </div>
                 </div>
            </div>
        )
    }
});

export default ListInfo;
