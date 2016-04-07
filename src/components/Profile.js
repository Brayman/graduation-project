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
              <div className="RowFlexBetween FlexEnd">
                <div className="item3p">
                  <img src="http://cs402225.vk.me/v402225355/335f/0S3hgdCzbaA.jpg"
                  className="ImageProfile" alt=""/>
                  <div className="MarkerProfile">
                    Rating {this.props.Profile.rating}
                  </div>
                    {settings}
                </div>
                <div className="item2p">
                  <div className="ProfileDescriptionText ProfileTextMyselfMargin">About myself</div>
                  <div className="ProfileTextMyself">{this.props.Profile.description || 'Здесь пока пусто.'}</div>
                </div>
                <div className="item1p">
                  <div className="ProfileNameText">{this.props.Profile.name || this.props.Profile.login}</div>
                  <div className="ProfileDescriptionText">Information</div>
                  <div>
                    <img className="ProfileContactIco"
                    src="http://i.yapx.ru/BAJB.png" alt=""/>
                    facebook.com
                  </div>
                  <div>
                    <i className='Icon ProfileContactIco'>email</i>
                    {this.props.Profile.contacts.mail}
                  </div>
                  <div>
                    <i className='Icon ProfileContactIco'>phone</i>
                    {this.props.Profile.contacts.phone}
                  </div>
                  <div>
                    <img className="ProfileContactIco"
                    src="https://i.yapx.ru/BAJE.png" alt=""/>
                    twiter.com
                  </div>
                  <div>
                    <img className="ProfileContactIco"
                    src="https://i.yapx.ru/BAJF.png" alt=""/>
                    vk.com
                  </div>
                  <div>
                    <img className="ProfileContactIco"
                    src="https://i.yapx.ru/BAJn.png" alt=""/>
                    Brest
                  </div>
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
