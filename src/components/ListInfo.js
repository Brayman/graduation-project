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
              <Link to={`/${this.props.data._id}`}>
            <div className="DisplayBlock Right">

            <img className="MassiveImage Hover "
              src={this.props.data.picture}
            alt=""/>
              <button className="ButtonViewProfil">view profile</button>

            </div>
          </Link>
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
                  {this.props.data.contacts ? <div><i className="phone icon"/>{this.props.data.contacts.phone}</div> : null}
                  {this.props.data.contacts ? <div><i className="at icon"/>{this.props.data.contacts.mail}</div> : null}
                  {this.props.data.location ? <div><i className="marker icon"/>{this.props.data.location}</div> : null}
              </div>
            </div>
        </div>
        );
    }
});
export default ListInfo;
