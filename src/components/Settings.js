import React from 'react';
import {connect} from 'react-redux';
import {saveChanges} from '../actions';

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
        let panel = function (a, e, Save) {
            switch (a) {
                case 'profile':
                    return (
                        <div>
                            <div className="SettingTextInput">Profile pictures</div>
                            <div>
                                <input className="SettingsInput"
                                       name="picture"
                                       type="text"
                                       placeholder="write URL on image..."
                                       onBlur={e}
                                /></div>
                            <div className="SettingTextInput">Name</div>
                            <div>
                                <input className="SettingsInput"
                                       name="name"
                                       type="text"
                                       placeholder="Write..."
                                       onBlur={e}
                                />
                            </div>
                            <div className="SettingTextInput">Sex</div>
                            <div>
                              <input className="RadioButton" type="radio" id="female" name="sex"/>
                              female
                              <input className="RadioButton" type="radio" id="male" name="sex"/>
                              male
                            </div>
                            <div className="SettingTextInput">Company</div>
                            <div><input className="SettingsInput"
                                        type="text"
                                        placeholder="Write..."
                                        onBlur={e}
                            /></div>
                            <div className="SettingTextInput">Location</div>
                            <div><input className="SettingsInput"
                                        name="location"
                                        type="text"
                                        placeholder="City"
                                        onBlur={e}
                            /></div>
                            <div className="SettingTextInput">Birthdate</div>
                            <div>
                                <input className="SettingsInput"
                                       type="date"
                                       placeholder="Write..."
                                />
                            </div>
                            <div className="SettingTextInput">about</div>
                            <div>
                                <textarea className="SettingsInput"
                                       type="text"
                                       name="description"
                                       placeholder="Write..."
                                       onBlur={e}
                                />
                            </div>
                            <div>
                                <button className="SettingUpdate"
                                         onClick={Save}
                                >
                                    Update profile
                                </button>
                            </div>
                        </div>
                    );
                case 'contacts':
                    return (
                          <div>
                            <div>
                                <input className="SettingsInput"
                                        name="phone"
                                        type="number"
                                        placeholder="Write..."
                                        onBlur={e}
                                />
                            </div>
                            <div className="SettingTextInput">
                                Mail
                            </div>
                            <div>
                                <input className="SettingsInput"
                                       type="mail"
                                       name="mail"
                                       placeholder="Write..."
                                       onBlur={e}/>
                            </div>
                            <div className="SettingTextInput">
                                Phone
                            </div>
                            <div>
                                <input className="SettingsInput"
                                       name="phone"
                                       type="text"
                                       placeholder="Write..."
                                       onBlur={e}
                                />
                            </div>
                            <div className="SettingTextInput">
                                Twitter
                            </div>
                            <div>
                                <input className="SettingsInput"
                                       name="twitter"
                                       type="text"
                                       placeholder="Write..."
                                       onBlur={e}
                                />
                            </div>
                            <div className="SettingTextInput">
                                VK
                            </div>
                            <div>
                                <input className="SettingsInput"
                                       name=""
                                       type="text"
                                       placeholder="Write..."
                                       onBlur={e}
                                />
                            </div>
                            <div className="SettingTextInput">
                                Facebook
                            </div>
                            <div>
                                <input className="SettingsInput"
                                       type="mail"
                                       placeholder="Write..."
                                       onBlur={e}
                                />
                            </div>
                            <div>
                                <button className="SettingUpdate"
                                        onClick={Save}
                                >
                                    Update contacts
                                </button>
                            </div>
                          </div>
                    );
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
                                        onBlur={e}
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
                    <div className="SettingsExpander" id="profile" onClick={this.Vibor}>profile</div>
                    <div className="SettingsExpander" id="contacts" onClick={this.Vibor}>contacts</div>
                    <div className="SettingsExpander" id="account" onClick={this.Vibor}>account</div>
                    <div className="SettingsExpander" id="mail" onClick={this.Vibor}>mail</div>
                </div>
                <div className="RightPanelSetting item2s">
                    <div className="SettingsInfoText">Setting</div>
                    {panel(this.state.panel, this.NewValue, this.Save)}
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
