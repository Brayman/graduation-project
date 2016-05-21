import React from 'react';
import {saveChanges} from '../actions';
var Settings = React.createClass({
    getInitialState() {
        return this.props.route.dop.getState();
    },
    render() {
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
                /></div>
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
export default Settings;
/**
 * Created by xolod on 03.05.2016.
 */
