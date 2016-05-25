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
                this.setState({user: Object.assign({}, this.state.user, {name: event.target.value})});
                break;
            case 'picture':
                this.setState({user: Object.assign({}, this.state.user, {picture: event.target.value})});
                break;
            case 'location':
                this.setState({user: Object.assign({}, this.state.user, {location: event.target.value})});
                break;
            case 'description':
                this.setState({
                    user: Object.assign({}, this.state.user, {description: event.target.value})});
                break;
            case 'birthday':
                this.setState({
                    user: Object.assign({}, this.state.user, {birthday: event.target.value})});
                break;
            case 'tag':
                this.setState({
                    user: Object.assign({}, this.state.user, {tags: event.target.value})});
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
                           value={this.state.user.picture}
                           onChange={this.NewValue}
                    /></div>
                <div className="SettingTextInput">Name</div>
                <div>
                    <input className="SettingsInput"
                           name="name"
                           type="text"
                           placeholder="Write..."
                           value={this.state.user.name}
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
                            value={this.state.user.picture}
                            onChange={this.NewValue}
                /></div>
                <div className="SettingTextInput">Location</div>
                <div><input className="SettingsInput"
                            name="location"
                            type="text"
                            placeholder="City"
                            value={this.state.user.location}
                            onChange={this.NewValue}
                /></div>
                <div className="SettingTextInput">Birthdate</div>
                <div>
                    <input className="SettingsInput"
                           type="date"
                           name="birthday"
                           placeholder="Write..."
                           value={this.state.user.birthday}
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
                                          value={this.state.user.description}
                                          onChange={this.NewValue}
                                />
                </div>
                <div className="SettingTextInput">Teg search</div>
                <div>
                    <select className="SettingSelect"
                            name="tag"
                            onChange={this.NewValue}
                            defaultValue={this.state.user.tags}
                    >
                        <option>ремонт</option>
                        <option>питание</option>
                        <option>развлечения</option>
                        <option>дизайн</option>
                        <option>продукты</option>
                    </select>
                </div>
                <div className="SettingTextInput">Description tags</div>
                <div><input className="SettingsInput"
                name="location" type="text" placeholder="Pleas write description (PC,clock or other)..."/>
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
export default Profile;
/**
     * Created by xolod on 30.04.2016.
     */
