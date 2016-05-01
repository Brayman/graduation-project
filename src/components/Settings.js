import React from 'react';
import {connect} from 'react-redux';
import {saveChanges} from '../actions';
import {browserHistory} from 'react-router';
import '../../css/settings.css';

var Settings = React.createClass({
    getInitialState: function () {
        return {settings: {}, panel: 'profile'};
    },
    componentDidMount() {
        this.setState({settings: this.props.userData});
    },
    NewValue: function (event) {
        switch (event.target.name) {
            case 'name':
                this.setState({settings: Object.assign({}, this.state.settings, {name: event.target.value})});
                break;
            case 'picture':
                this.setState({settings: Object.assign({}, this.state.settings, {picture: event.target.value})});
                break;
            case 'location':
                this.setState({settings: Object.assign({}, this.state.settings, {location: event.target.value})});
                break;

            case 'mail':
                this.setState({
                    settings: Object.assign({}, this.state.settings,
                        {
                            contacts: Object.assign(this.state.settings.contacts, {
                                mail: event.target.value
                            })
                        })
                });
                break;
            case 'phone':
                this.setState({
                    settings: Object.assign({}, this.state.settings,
                        {
                            contacts: Object.assign(this.state.settings.contacts, {
                                phone: event.target.value
                            })
                        })
                });
                break;
            case 'twitter':
                this.setState({
                    settings: Object.assign({}, this.state.settings,
                        {
                            contacts: Object.assign(this.state.settings.contacts, {
                                twitter: event.target.value
                            })
                        })
                });
                break;
            case 'vk':
                this.setState({
                    settings: Object.assign({}, this.state.settings,
                        {
                            contacts: Object.assign(this.state.settings.contacts, {
                                vk: event.target.value
                            })
                        })
                });
                break;
            case 'facebook':
                this.setState({
                    settings: Object.assign({}, this.state.settings,
                        {
                            contacts: Object.assign(this.state.settings.contacts, {
                                facebook: event.target.value
                            })
                        })
                });
                break;
            case 'description':
                this.setState({
                    settings: Object.assign({}, this.state.settings, {description: event.target.value})});
                break;
        }
    },
    Vibor: function (e) {
        this.setState({panel: e.target.id});
    },
    Save: function () {
        this.props.dispatch(saveChanges(this.state.settings));
    },
    render: function () {
        let panel = function (a, e, Save, state) {
            switch (a) {
                case 'account':
                    return (
                        <div>
                            <div className="SettingTextInput">Old password</div>
                            <div><input className="SettingsInput"
                                        type="password" placeholder="Write..."/></div>
                            <div className="SettingTextInput">New password</div>
                            <div><input className="SettingsInput"
                                        type="password" placeholder="Write..."/></div>
                            <div className="SettingTextInput">Confirm new password</div>
                            <div><input className="SettingsInput"
                                        type="password" placeholder="Write..."/></div>
                            <div>
                                <button className="SettingUpdate">Update password</button>
                                <button className="SettingDontKnow">I forgot my password</button>
                            </div>
                        </div>
                    );
                case 'mail':
                    return (
                        <div>
                            <div className="SettingTextInput">Show email adress?</div>
                            <div>
                              <input className="RadioButton" type="radio" id="Yes" name="EmailShow"/>
                              Yes
                              <input className="RadioButton" type="radio" id="No" name="EmailShow"/>
                              No
                            </div>
                            <div className="SettingTextInput">Add email adress</div>
                            <div><input className="SettingsInput"
                                        type="mail"
                                        placeholder="Write..."
                                        name="mail"
                                        onChange={e}
                            /></div>
                            <div>
                                <button className="SettingUpdate" onClick={Save}
                                >
                                    Update email
                                </button>
                            </div>
                        </div>
                    );
                default:
                    return null;
            }
        };
        return (
            <div className="RowFlexBetween  ">
                <div className="LeftPanelSetting item1s">
                    <div className="SettingsInfoText">Personal Settings</div>
                    <div className="SettingsExpander"
                         id="profile"
                         onClick={() => browserHistory.push('/settings/profile')}
                    >
                        profile
                    </div>
                    <div className="SettingsExpander"
                         id="contacts"
                         onClick={() => browserHistory.push('/settings/contacts')}
                    >contacts</div>
                    <div className="SettingsExpander" id="account" onClick={this.Vibor}>account</div>
                    <div className="SettingsExpander" id="mail" onClick={this.Vibor}>mail</div>
                </div>
                <div className="RightPanelSetting item2s">
                    <div className="SettingsInfoText">Setting</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
});
export default connect(
    (state)=> {
        return {
            userData: state.userData
        };
    }
)(Settings);
