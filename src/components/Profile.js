import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getProfileData} from '../actions';

var Profile = React.createClass({
    componentWillMount() {
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
                  <img src={this.props.Profile.picture}
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
                    {this.props.Profile.contacts.facebook ? (<div>
                        <i className="facebook icon"/>
                            {this.props.Profile.contacts.facebook}
                    </div>) : null}
                    {this.props.Profile.contacts.mail ? (<div>
                        <i className="mail icon"/>
                        {this.props.Profile.contacts.mail}
                    </div>) : null}
                    {this.props.Profile.contacts.phone ? (<div>
                        <i className="phone icon"/>
                        {this.props.Profile.contacts.phone}
                    </div>) : null}
                    {this.props.Profile.contacts.vk ? (<div>
                        <i className="vk icon"/>
                        {this.props.Profile.contacts.vk}
                    </div>) : null}
                    {this.props.Profile.contacts.twitter ? (<div>
                        <i className="twitter icon"/>
                        {this.props.Profile.contacts.twitter}
                    </div>) : null}
                    {this.props.Profile.contacts.location ? (<div>
                        <i className="marker icon"/>
                        {this.props.Profile.contacts.location}
                    </div>) : null}
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
                    <i className="setting icon"/>
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
