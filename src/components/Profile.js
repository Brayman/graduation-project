import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getProfileData} from '../actions';

var Profile = React.createClass({
    componentWillMount() {
        //this.props.dispatch(loadUserData())
        this.props.dispatch(getProfileData(this.props.params.user));
    },
    render: function () {
        var settings;
        if (this.props.userData.login === this.props.Profile.login) {
            settings = <Settings/>;
        }
        return (
            <div>
                <div className="ProfilContent">
                    <div className="Column item2 white">
                        <div>
                            <h2 className="PadingText">
                                {this.props.Profile.name || this.props.Profile.login}
                            </h2>
                        </div>
                        <div className="ProfilInfo">
                            <h3 className="NameFont">
                                Contact:
                            </h3>

                            <div>
                                <i className="Icon">mail</i>
                                {this.props.Profile.contacts.mail}
                            </div>
                        </div>
                        <div className="ProfilInfo">
                            <h3 className="PadingText">
                                Work:
                            </h3>
                            <div className="Text">
                                {this.props.Profile.description || 'Здесь пока пусто.'}
                            </div>
                        </div>
                    </div>
                    <div className="item1 white">

                        <div>
                            <img className="ProfilImage"
                                 src="http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg"
                            />
                        </div>
                        <h2 className="MarkerProfil">
                            Rating {this.props.Profile.rating}
                        </h2>
                        {settings}
                    </div>
                </div>
            </div>
        );
    }
});
var Settings = React.createClass({
    render: function () {
        return (
            <Link to="/settings">
                <button className="Button Settings">
                    <i className="Icon">
                        settings
                    </i>
                    settings
                </button>
            </Link>
        );
    }
});
export default connect(
    (state)=> {
        return {
            userData: state.userData,
            Profile: state.Profile
        };
    }
)(Profile);
/**
 * Created by Artsiom_Rakitski on 3/18/2016.
 */
