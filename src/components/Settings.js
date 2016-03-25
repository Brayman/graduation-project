import React from 'react'

var Test = React.createClass({
    getInitialState: function(){
        return {username:'', password:''}
    },
    usernameChange: function(event) {
        this.setState({username: event.target.value});
    },
    Click: function() {
        this.setState({password: event.target.value});
    },
    render: function() {
            return (
                <div className="SettingContent">
                    <div className="SettingCard SettingColor">
                        <h2 className="SettingName">Profile settings :</h2>
                        <div>
                            <h3 className="SettingText">Change name:</h3>
                            <i className="material-icons">assignment_ind</i>
                            <input className="SettingInput" type="text" placeholder="Name..."/>
                        </div>
                        <div>
                            <h3 className="SettingText">Change mail:</h3>
                            <i className="material-icons">mail</i>
                            <input className="SettingInput" type="text" placeholder="Mail..."/>
                        </div>
                        <div>
                            <h3 className="SettingText">Change phone:</h3>
                            <i className="material-icons">call</i>
                            <input className="SettingInput" type="text" placeholder="Number phone..."/>
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
                            <i className="material-icons">info_outline</i>
                            <textarea className="SettingTextarea" type="text" placeholder="Information about your company or yourself..."/>
                        </div>
                        <button className="SettingBtn">
                            <i className="material-icons" title="Save">
                                save
                            </i>
                            save
                        </button>
                    </div>
                </div>
            )
        }
    });
export default Test;