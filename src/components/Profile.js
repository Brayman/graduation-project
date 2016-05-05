import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {getProfileData} from '../actions';
import Comment from './Comment';
import '../../css/profile.css';

var Profile = React.createClass({
    componentWillMount() {
        //this.props.dispatch(getProfileData(this.props.params.user));
        this.props.route.onEnter(this.props.params.user);
        console.log(this.props)
    },
    go() {
        this.props.dispatch(getProfileData(this.props.params.user));
    },
    render: function () {

        var settings;
        if (this.props.userData.login === this.props.Profile.login) {
            settings = <Settings/>;
        }
        return (
            <div className="content profile">
                <div className='profile-header'>
                    <img src={this.props.Profile.picture}
                         className="ImageProfile" alt=""
                    />
                    <div>
                        <div className='header-main'>
                        {this.props.Profile.company ? (
                                                        <i className="suitcase icon" />
                                                      ) : null}
                        <h2>
                            {this.props.Profile.name || this.props.Profile.login}
                        </h2>
                        {settings}

                    </div>
                    <div className='header-second'>

                        <div className="item">
                            Rating: {this.props.Profile.rating || 10}
                        </div>
                        <div className="item">
                            reviews: {this.props.Profile.rating || 1}
                        </div>
                        <div className="item">
                            follow: {this.props.Profile.rating || 0}
                        </div>
                        <div className="item">
                            following: {this.props.Profile.rating || 10}
                        </div>
                    </div>
                    </div>
                </div>
                <div className='profile-body'>
                    <div className='contacts'>
                        <div>
                            {this.props.Profile.contacts.facebook ? (<a href={`https://www.facebook.com/${this.props.Profile.contacts.facebook}`}>
                                <i className="facebook icon"/>
                                    {this.props.Profile.contacts.facebook}
                            </a>) : null}
                        </div>
                        <div>
                            {this.props.Profile.contacts.mail ? (<div>
                                <i className="mail icon"/>
                                {this.props.Profile.contacts.mail}
                            </div>) : null}
                        </div>
                        <div>
                            {this.props.Profile.contacts.phone ? (<div>
                                <i className="phone icon"/>
                                {this.props.Profile.contacts.phone}
                            </div>) : null}
                        </div>
                        <div>
                            {this.props.Profile.contacts.vk ? (<a href={`https://www.vk.com/${this.props.Profile.contacts.vk}`}>
                                <i className="vk icon"/>
                                {this.props.Profile.contacts.vk}
                            </a>) : null}
                        </div>
                        {this.props.Profile.contacts.twitter ? (<div>
                            <i className="twitter icon"/>
                            {this.props.Profile.contacts.twitter}
                        </div>) : null}
                        {this.props.Profile.location ? (<div>
                            <i className="marker icon"/>
                            {this.props.Profile.location}
                        </div>) : null}
                    </div>
                    <div className='wall'>
                        <div className='about'>
                            {this.props.Profile.description || 'Здесь пока пусто.'}
                        </div>
                        <div className='comments'>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
const Settings = React.createClass({
    render: function () {
        return (
            <button className="settings"
                    onClick={() => browserHistory.push('/settings/profile')}
            >
                <i className="setting icon"/>
            </button>
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
