import React from 'react';
import {saveChanges} from '../actions';
var Profile = React.createClass({
    getInitialState() {
        return this.props.route.dop.getState();
    },
    componentWillMount() {
    },
    NewValue: function (event) {
        switch (event.target.name) {
            case 'name':
                this.setState({userData: Object.assign({}, this.state.userData, {name: event.target.value})});
                break;
            case 'picture':
                this.setState({userData: Object.assign({}, this.state.userData, {picture: event.target.value})});
                break;
            case 'location':
                this.setState({userData: Object.assign({}, this.state.userData, {location: event.target.value})});
                break;
            case 'description':
                this.setState({
                    userData: Object.assign({}, this.state.userData, {description: event.target.value})});
                break;
            case 'birthday':
                this.setState({
                    userData: Object.assign({}, this.state.userData, {birthday: event.target.value})});
                break;
            default:
                console.log(event.target.value);
                break;
        }
    },
    render() {
        return (
            <div>
                <div className="SettingTextInput">Profile pictures</div>
                <div>
                    <input className="SettingsInput"
                           name="picture"
                           type="text"
                           placeholder="write URL on image..."
                           value={this.state.userData.picture}
                           onChange={this.NewValue}
                    /></div>
                <div className="SettingTextInput">Name</div>
                <div>
                    <input className="SettingsInput"
                           name="name"
                           type="text"
                           placeholder="Write..."
                           value={this.state.userData.name}
                           onChange={this.NewValue}
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
                            value={this.state.userData.picture}
                            onChange={this.NewValue}
                /></div>
                <div className="SettingTextInput">Location</div>
                <div><input className="SettingsInput"
                            name="location"
                            type="text"
                            placeholder="City"
                            value={this.state.userData.location}
                            onChange={this.NewValue}
                /></div>
                <div className="SettingTextInput">Birthdate</div>
                <div>
                    <input className="SettingsInput"
                           type="date"
                           name="birthday"
                           placeholder="Write..."
                           value={this.state.userData.birthday}
                           onChange={this.NewValue}
                    />
                </div>
                <div className="SettingTextInput">about</div>
                <div>
                                <textarea className="SettingsInput"
                                          type="text"
                                          rows="4"
                                          name="description"
                                          placeholder="Write..."
                                          value={this.state.userData.description}
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
export default Profile;
/**
     * Created by xolod on 30.04.2016.
     */

