var React = require('react');
import {Link} from 'react-router';
var ListInfo = React.createClass({

    render: function () {
        /*var description;
        if(this.props.data.profile.description.length>100){
            description = this.props.data.profile.description.substring(1,100)
        } else {
            description = this.props.data.profile.description
        }*/
        return (
          <div className="card">
            <header className='card-header'>
                <h3>
                    <Link to={`/${this.props.data._id}`}>
                        {this.props.data.name || this.props.data.login}
                    </Link>
                </h3>
            </header>
            <div className='card-body'>
                <div className='card-info'>
                    {this.props.data.description}
                </div>
                <div className='card-info'>
                    <h4>Contacts:</h4>
                    {this.props.data.contacts ? <div><i className="phone icon"/>{this.props.data.contacts.phone}</div> : null}
                    {this.props.data.contacts ? <div><i className="at icon"/>{this.props.data.contacts.mail}</div> : null}
                    {this.props.data.location ? <div><i className="marker icon"/>{this.props.data.location}</div> : null}
                </div>
                    
                <div className='card-image'>
                    <img className="card-image"
                         src={this.props.data.picture}
                    />
                    <Link to={`/${this.props.data._id}`}>
                        <button className="primary card-button">
                            view profile
                        </button>
                    </Link>
                </div>
            </div>
              {/*<Link to={`/${this.props.data._id}`}>
            <div className="DisplayBlock Right">

            
              

            </div>
          </Link>
            <div className="RowAll">
              <div>
                <h4 className="PostText">
                    
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
                  
              </div>
              <div className="PostTextRight">
                
              </div>
            </div>*/}
        </div>
        );
    }
});
export default ListInfo;
