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
            <Link to={"/"+this.props.data._id}>
            <img className="MediumImage Hover "
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/c_a_k_e-profile_image-b25ae37f0296d0f1-300x300.jpeg"
            alt=""/>
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
            <div className="DFlex">
              <div className="PostTextLeft">
                  {this.props.data.description}
              </div>
              <div className="PostTextRight">
                <h4>Contacts:</h4>
                <div><i className="phone icon"/>+375292297034</div>
                <div><i className="at icon"/>vlad@mail.ru</div>
                <div><i className="marker icon"/>Brest</div>
              </div>
            </div>
        </div>
        )
    }
});
export default ListInfo;
