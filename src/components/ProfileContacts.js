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
                    user: Object.assign({}, this.state.user,
                        {
                            contacts: Object.assign(this.state.user.contacts, {
                                mail: event.target.value
                            })
                        })
                });
                break;
            case 'phone':
                this.setState({
                    user: Object.assign({}, this.state.user,
                        {
                            contacts: Object.assign(this.state.user.contacts, {
                                phone: event.target.value
                            })
                        })
                });
                break;
            case 'twitter':
                this.setState({
                    user: Object.assign({}, this.state.user,
                        {
                            contacts: Object.assign(this.state.user.contacts, {
                                twitter: event.target.value
                            })
                        })
                });
                break;
            case 'vk':
                this.setState({
                    user: Object.assign({}, this.state.user,
                        {
                            contacts: Object.assign(this.state.user.contacts, {
                                vk: event.target.value
                            })
                        })
                });
                break;
            case 'facebook':
                this.setState({
                    user: Object.assign({}, this.state.user,
                        {
                            contacts: Object.assign(this.state.user.contacts, {
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
                           value={this.state.user.contacts.mail}
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
                           value={this.state.user.contacts.phone}
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
                           value={this.state.user.contacts.twitter}
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
                           value={this.state.user.contacts.vk}
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
                           value={this.state.user.contacts.facebook}
                           name="facebook"
                           type="text"
                           placeholder="Write..."
                           onChange={this.NewValue}
                    />
                </div>
                <div>
                    <button className="SettingUpdate"
                            onClick={() => this.props.route.dop.dispatch(saveChanges(this.state.user))}
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
