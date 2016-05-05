var React = require('react');
import {Link} from 'react-router';
import '../../css/card.css';
var ListInfo = React.createClass({
    render: function () {
        return (
          <div className="card">
            <header className='card-header'>
                <h3 className="NameText">
                    <Link to={`/${this.props.data._id}`}>
                        {this.props.data.name || this.props.data.login}
                    </Link>
                </h3>
            </header>
            <div className='card-body'>
                <div className='card-info'>
                    <div className='card-info1'>
                        {this.props.data.description}
                    </div>
                    <div className='card-info1'>
                        <h4>Contacts:</h4>
                        {this.props.data.contacts ? <div><i className="phone icon"/>{this.props.data.contacts.phone}</div> : null}
                        {this.props.data.contacts ? <div><i className="at icon"/>{this.props.data.contacts.mail}</div> : null}
                        {this.props.data.location ? <div><i className="marker icon"/>{this.props.data.location}</div> : null}
                    </div>
                </div>
                <div className='card-image'>
                    <img className="card-image"
                         src={this.props.data.picture}
                    width="150px" height="150px"/>

                        <button className="primary card-button"
                                onClick={() => this.props.action(this.props.data._id)}
                        >
                            view profile
                        </button>
                </div>
            </div>
        </div>
        );
    }
});
export default ListInfo;
