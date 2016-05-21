import React from 'react';
import {saveChanges} from '../actions';
var Contacts = React.createClass({
    getInitialState() {
        return this.props.route.dop.getState();
    },
    componentWillMount() {
    },
    NewValue: function (event) {
        switch (event.target.name) {
            case 'mail':
                this.setState({
                    userData: Object.assign({}, this.state.userData,
                        {
                            contacts: Object.assign(this.state.userData.contacts, {
                                mail: event.target.value
                            })
                        })
                });
                break;
            case 'phone':
                this.setState({
                    userData: Object.assign({}, this.state.userData,
                        {
                            contacts: Object.assign(this.state.userData.contacts, {
                                phone: event.target.value
                            })
                        })
                });
                break;
            case 'twitter':
                this.setState({
                    userData: Object.assign({}, this.state.userData,
                        {
                            contacts: Object.assign(this.state.userData.contacts, {
                                twitter: event.target.value
                            })
                        })
                });
                break;
            case 'vk':
                this.setState({
                    userData: Object.assign({}, this.state.userData,
                        {
                            contacts: Object.assign(this.state.userData.contacts, {
                                vk: event.target.value
                            })
                        })
                });
                break;
            case 'facebook':
                this.setState({
                    userData: Object.assign({}, this.state.userData,
                        {
                            contacts: Object.assign(this.state.userData.contacts, {
                                facebook: event.target.value
                            })
                        })
                });
                break;
        }
    },
    render() {
        return (
            <div>
                <div className="SettingTextInput">
                    Mail
                </div>
                <div>
                    <input className="SettingsInput"
                           value={this.state.userData.contacts.mail}
                           type="mail"
                           name="mail"
                           placeholder="Write..."
                           onChange={this.NewValue}/>
                </div>
                <div className="SettingTextInput">
                    Phone
                </div>
                <div>
                    <input className="SettingsInput"
                           value={this.state.userData.contacts.phone}
                           name="phone"
                           type="text"
                           placeholder="Write..."
                           onChange={this.NewValue}
                    />
                </div>
                <div className="SettingTextInput">
                    Twitter
                </div>
                <div>
                    <input className="SettingsInput"
                           value={this.state.userData.contacts.twitter}
                           name="twitter"
                           type="text"
                           placeholder="Write..."
                           onChange={this.NewValue}
                    />
                </div>
                <div className="SettingTextInput">
                    VK
                </div>
                <div>
                    <input className="SettingsInput"
                           value={this.state.userData.contacts.vk}
                           name="vk"
                           type="text"
                           placeholder="Write..."
                           onChange={this.NewValue}
                    />
                </div>
                <div className="SettingTextInput">
                    Facebook
                </div>
                <div>
                    <input className="SettingsInput"
                           value={this.state.userData.contacts.facebook}
                           name="facebook"
                           type="text"
                           placeholder="Write..."
                           onChange={this.NewValue}
                    />
                </div>
                <div>
                    <button className="SettingUpdate"
                            onClick={() => this.props.route.dop.dispatch(saveChanges(this.state.userData))}
                    >
                        Update profile
                    </button>
                </div>
            </div>
        );
    }
});
export default Contacts;
/**
 * Created by xolod on 30.04.2016.
 */
