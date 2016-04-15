var React = require('react');
import { Link} from 'react-router';
var ListInfo = React.createClass({

    render: function () {
        /*var description;
        if(this.props.data.profile.description.length>100){
            description = this.props.data.profile.description.substring(1,100)
        } else {
            description = this.props.data.profile.description
        }*/
        return (
          <div className="Block">
            <div className="DisplayBlock Right">
            <img className="MediumImage Hover "
              src={this.props.data.picture}
            alt=""/>
            <Link to={"/"+this.props.data._id}>
              <button className="ButtonViewProfil">view profile</button>
            </Link>
            </div>
            <div className="RowAll">
              <div>
                <h4 className="PostText">
                    {this.props.data.name || this.props.data.login}
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
