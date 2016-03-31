import React from 'react'
import {connect} from 'react-redux'
import {saveChanges} from '../actions'

var Settings = React.createClass({
    usernameChange: function(event) {
        this.setState({username: event.target.value});
    },
    Click: function() {
        var name = this.refs.name.value;
        var mail = this.refs.mail.value;
        var phone = this.refs.phone.value;
        var description = this.refs.description.value;
        var user=this.props.userData;
        let data = {
            _id: user.id,
            username: user.username,
            password: user.password,
            name: name||user.name,
            description: description||user.description,
            contact:{
                mail: mail||user.contact.mail,
                phone: phone||user.contact.phone
            }
        };
        this.props.dispatch(saveChanges(data))
    },
    render: function() {
            return (
                <div className="SettingContent">
                    <div className="SettingCard SettingColor">
                        <h2 className="SettingName">Profile settings :</h2>
                        <div>
                            <h3 className="SettingText">Change name:</h3>
                            <i className="Icon small">assignment_ind</i>
                            <input className="SettingInput" ref="name" type="text" placeholder="Name..."/>
                        </div>
                        <div>
                            <h3 className="SettingText">Change mail:</h3>
                            <i className="Icon small">mail</i>
                            <input className="SettingInput" type="text" ref="mail" placeholder="Mail..."/>
                        </div>
                        <div>
                            <h3 className="SettingText">Change phone:</h3>
                            <i className="Icon small">call</i>
                            <input className="SettingInput" type="text" ref="phone" placeholder="Number phone..."/>
                        </div>
                        <div>
                            <h3 className="SettingText">Change photo:</h3>
                            <img className="SettingImg" src="" alt="New photo"/>
                                <div className="SettingImgBtn">
                                    <label>
                                        <input type="file" name="file" multiple="" accept="image/*,image/jpeg"/>
                                            <span>Add photo</span>
                                    </label>
                                </div>
                        </div>
                        <div>
                            <h3 className="SettingText">Change info:</h3>
                            <i className="Icon small">info_outline</i>
                            <textarea className="SettingTextarea"
                                      type="text"
                                      placeholder="Information about your company or yourself..."
                                      ref="description"
                            />
                        </div>
                        <button className="SettingBtn"
                                onClick={this.Click}
                        >
                            <i className="Icon small" title="Save">
                                save
                            </i>
                            save
                        </button>
                    </div>
                </div>
            )
        }
    });
export default connect(
    (state)=> {return{
        userData: state.userData
    }})(Settings)