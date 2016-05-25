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
        this.setState({settings: this.props.user});
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
        return (
            <div className="RowFlexBetween content">
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
                    >
                        contacts
                    </div>
                    <div className="SettingsExpander"
                         id="account"
                         onClick={() => browserHistory.push('/settings/account')}
                    >
                        account
                    </div>
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
            user: state.user
        };
    }
)(Settings);
