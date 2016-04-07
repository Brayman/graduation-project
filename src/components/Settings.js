import React from 'react'
import {connect} from 'react-redux'
import {saveChanges} from '../actions'

var Settings = React.createClass({
    getInitialState: function(){
        return{settings:{}, panel: 'profile'}
    },
    componentDidMount(){
        this.setState({settings: this.props.userData});
    },
    NewValue: function(event) {
        switch(event.target.name){
            case 'name':
                this.setState({settings: Object.assign({},this.state.settings, {name: event.target.value})});
                break;
            case 'mail':
                this.setState({
                    settings: Object.assign({},this.state.settings,
                        {
                            contact: Object.assign(this.state.settings.contact, {
                                mail: event.target.value
                            }),
                        })
                });
                break;
            case 'phone':
                this.setState({
                    settings: Object.assign({},this.state.settings,
                        {
                            contact: Object.assign(this.state.settings.contact, {
                                phone: event.target.value
                            })
                        })
                });
                break;
            case 'description':
                this.setState({
                    settings: Object.assign({},this.state.settings, {description: event.target.value})});
                break;
        }
    },
    Vibor: function(e) {
        this.setState({panel: e.target.id});
    },
    Click: function() {
            console.log(this.state.settings);
            this.props.dispatch(saveChanges(this.state.settings))
    },
    render: function(){
        let panel=function(a, e, e2){
            switch (a) {
                case 'profile':
                    return (
                        <div>
                            <div className="SettingTextInput">Profile pictures</div>
                            <div>
                                <input className="SettingsInput"
                                       type="text"
                                       placeholder="write URL on image..."
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
                            <div><input type="radio" id='female' name="sex"/>
                            <label htmlFor="female"><span></span>female</label>
                            <input type="radio" id="male" name="sex"/>
                            <label htmlFor="male"><span></span>male</label>
                            <label htmlFor="radio1" className="css-label radGroup1"></label></div>
                            <div className="SettingTextInput">about</div>
                            <div>
                                <textarea className="SettingsInput"
                                       type="text"
                                       name="description"
                                       placeholder="Write..."
                                       onBlur={e}
                                />
                            </div>
                            <div className="SettingTextInput">Company</div>
                            <div><input className="SettingsInput"
                                        type="text" placeholder="Write..."
                                        onBlur={e}
                            /></div>
                            <div className="SettingTextInput">Location</div>
                            <div><input className="SettingsInput"
                                        type="text" placeholder="Write..."
                                        onBlur={e}
                            /></div>
                            <div>
                                <button className="SettingUpdate"
                                         onClick={e2}
                                >
                                    Update profile
                                </button>
                            </div>
                        </div>
                    );
                    case 'contacts':
                        return (
                          <div>
                            <div className="SettingTextInput">Mail</div>
                            <div><input className="SettingsInput"
                            type="mail" placeholder="Write..."/></div>
                            <div className="SettingTextInput">Phone</div>
                            <div><input className="SettingsInput"
                            type="mail" placeholder="Write..."/></div>
                            <div className="SettingTextInput">Twiter</div>
                            <div><input className="SettingsInput"
                            type="mail" placeholder="Write..."/></div>
                            <div className="SettingTextInput">VK</div>
                            <div><input className="SettingsInput"
                            type="mail" placeholder="Write..."/></div>
                            <div className="SettingTextInput">Facebook</div>
                            <div><input className="SettingsInput"
                            type="mail" placeholder="Write..."/></div>
                            <div><button className="SettingUpdate">Update contacts</button></div>
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
                                <input type="checkbox" name="EmailShow" value="Yes"/>
                                <input type="checkbox" name="EmailShow" value="No"/>
                            </div>
                            <div className="SettingTextInput">Add email adress</div>
                            <div><input className="SettingsInput"
                                        type="mail"
                                        placeholder="Write..."
                                        name="mail"
                            /></div>
                            <div><button className="SettingUpdate" onClick={e2}>Update email</button></div>
                        </div>
                    );
                default:
                    return(
                        <div> meeh</div>
                    )
                }

        }
        console.log(this.state.panel);
        return (
            <div className="RowFlexBetween  ">
                <div className="LeftPanelSetting item1s">
                    <div className="SettingsInfoText">Personal Settings</div>
                    <div className="SettingsExpander" id="profile" onClick={this.Vibor}>profile</div>
                    <div className="SettingsExpander" id="account" onClick={this.Vibor}>account</div>
                    <div className="SettingsExpander" id="mail" onClick={this.Vibor}>mail</div>
                </div>
                <div className="RightPanelSetting item2s">
                    <div className="SettingsInfoText">Setting</div>
                    {panel(this.state.panel, this.NewValue, this.Click)}
                </div>
            </div>
        )
    }
    });
export default connect(
    (state)=> {
        return{
        userData: state.userData
    }})(Settings)
