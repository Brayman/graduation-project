import React from 'react';
var Contacts = React.createClass({
    getInitialState() {
        return this.props.route.dop.getState()
    },
    componentWillMount() {
    },
    NewValue: function (event) {
        switch (event.target.name) {
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
                    >
                        Update contacts
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
