var React = require('react');
import {Link} from 'react-router'
var ListInfo = React.createClass({

    render: function() {
        return (
          <div className="Block">
            <Link to={"/profile/"+this.props.data.username+"/"+this.props.data.id}>
                <img className="MediumImage Right Hover"
                     src="https://static-cdn.jtvnw.net/jtv_user_pictures/c_a_k_e-profile_image-b25ae37f0296d0f1-300x300.jpeg"
                     alt=""/>
            </Link>
            <div className="RowAll">
              <div>
                <h4 className="PostText">
                    {this.props.data.username}
                </h4>
              </div>
              <div>
                <h4 className="PostText">
                    <span className="Marker">
                        Rating {this.props.data.rating}
                    </span>
                </h4>
              </div>
            </div>
            <p className="PostText">
                {this.props.data.description}
            </p>
        </div>
        )
    }
});
export default ListInfo;
