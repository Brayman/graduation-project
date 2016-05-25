import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {getProfileData, sendComment} from '../actions';
import Comment from './Comment';
import '../../css/profile.css';

var Profile = React.createClass({
    getInitialState() {
        return {review: {}};
    },
    Review() {
        let date = new Date().toDateString()
        this.props.dispatch(sendComment(this.props.params.user, {
            userRated: this.props.user._id,
            userName: this.props.user.name || this.props.user.login,
            userAvatar: this.props.user.picture,
            user: this.props.params.user,
            text: this.state.review.text,
            title: this.state.review.title,
            rating: this.state.review.rating,
            date: date
        }));
    },
    render() {
        var settings;
        if (this.props.user.login === this.props.Profile.login) {
            settings = <Settings/>;
        }
        return (
            <div className="content profile">
                <div className='profile-header'>
                    <img src={this.props.Profile.picture}
                         className="ImageProfile" alt=""
                    />
                    <div>
                        <div className='header-main'>
                        {this.props.Profile.company ? (
                                                        <i className="suitcase icon" />
                                                      ) : null}
                        <h2>
                            {this.props.Profile.name || this.props.Profile.login}
                        </h2>
                        {settings}

                    </div>
                    <div className='header-second'>

                        <div className="item">
                            Rating: {this.props.Profile.rating || 10}
                        </div>
                        <div className="item">
                            reviews: {this.props.Profile.rating || 1}
                        </div>
                        <div className="item">
                            follow: {this.props.Profile.rating || 0}
                        </div>
                        <div className="item">
                            following: {this.props.Profile.rating || 10}
                        </div>
                    </div>
                    </div>
                </div>
                <div className='profile-body'>
                    <div className='contacts'>
                        <div>
                            {this.props.Profile.contacts.facebook ? (<a href={`https://www.facebook.com/${this.props.Profile.contacts.facebook}`}>
                                <i className="facebook icon"/>
                                    {this.props.Profile.contacts.facebook}
                            </a>) : null}
                        </div>
                        <div>
                            {this.props.Profile.contacts.mail ? (<div>
                                <i className="mail icon"/>
                                {this.props.Profile.contacts.mail}
                            </div>) : null}
                        </div>
                        <div>
                            {this.props.Profile.contacts.phone ? (<div>
                                <i className="phone icon"/>
                                {this.props.Profile.contacts.phone}
                            </div>) : null}
                        </div>
                        <div>
                            {this.props.Profile.contacts.vk ? (<a href={`https://www.vk.com/${this.props.Profile.contacts.vk}`}>
                                <i className="vk icon"/>
                                {this.props.Profile.contacts.vk}
                            </a>) : null}
                        </div>
                        {this.props.Profile.contacts.twitter ? (<div>
                            <i className="twitter icon"/>
                            {this.props.Profile.contacts.twitter}
                        </div>) : null}
                        {this.props.Profile.location ? (<div>
                            <i className="marker icon"/>
                            {this.props.Profile.location}
                        </div>) : null}
                    </div>
                    <div className='wall'>
                        <div className='about'>
                            {this.props.Profile.description || 'Здесь пока пусто.'}
                        </div>
                        <div className='comments'>
                          <div className="WhiteBackgroundR">
                            <div className="TextDataTime">
                                Заголовок коментария
                            </div>
                            <div>
                              <input className="TextComponent"
                                     onChange={(e) => this.setState(
                                     {review: Object.assign({}, this.state.review, {title: e.target.value})}
                                     )}
                              />
                            </div>
                            <div className="TextDataTime">
                                Текст отзыва
                            </div>
                            <div>
                              <textarea className="TextComponent"
                                        onChange={(e) => this.setState(
                                        {review: Object.assign({}, this.state.review, {text: e.target.value})}
                                        )}
                              />
                            </div>
                            <div className="CentrPositionR">
                              <span className="TextDataTime">
                                  Оценка
                              </span>
                              <select
                                  onClick={(e) => this.setState({
                                      review: Object.assign({}, this.state.review, {rating: e.target.value})}
                                        )}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                              </select>
                            </div>
                            <div>
                            <button className="ButtonForRating"
                                    onClick={this.Review}
                            >Принять</button>
                            <button className="ButtonForRating">Отмена</button>
                            </div>
                          </div>
                            {this.props.comments.map(function (review) {
                                return (
                                    <Comment key={review._id} data={review}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
const Settings = React.createClass({
    render: function () {
        return (
            <button className="settings"
                    onClick={() => browserHistory.push('/settings/profile')}
            >
                <i className="setting icon"/>
            </button>
        );
    }
});
export default connect(
    (state)=> {
        return {
            comments: state.comments,
            user: state.user,
            Profile: state.Profile
        };
    }
)(Profile);

/**
 * Created by Artsiom_Rakitski on 3/18/2016.
 */
