import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getProfileData} from '../actions';
import '../../css/profile.css';

var Profile = React.createClass({
    componentWillMount() {
        //this.props.dispatch(getProfileData(this.props.params.user));
        this.props.route.onChange(this.props.params.user);
        console.log(this.props)
    },
    go() {

    },
    render: function () {

        var settings;
        if (this.props.userData.login === this.props.Profile.login) {
            settings = <Settings/>;
        }
        return (
            <div className='profile'>
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
                    <div className='content'>
                        <div className='about'>
                            {this.props.Profile.description || 'Здесь пока пусто.'}
                        </div>
                        <div className='comments'>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                        </div>
                    </div>
                </div>
            </div>
            //   <div className="RowFlexBetween FlexEnd">
            //     <div className="item3p">
            //       <img src={this.props.Profile.picture}
            //       className="ImageProfile" alt=""/>
            //       <div className="MarkerProfile">
            //         Rating {this.props.Profile.rating}
            //       </div>
            //         {settings}
            //     </div>
            //     <div className="item2p">
            //       <div className="ProfileDescriptionText ProfileTextMyselfMargin">About myself</div>
            //       <div className="ProfileTextMyself">{this.props.Profile.description || 'Здесь пока пусто.'}</div>
            //     </div>
            //     <div className="item1p">
            //       <div className="ProfileNameText">{this.props.Profile.name || this.props.Profile.login}</div>
            //       <div className="ProfileDescriptionText">Information</div>
            //         <div>
            //             {this.props.Profile.contacts.facebook ? (<a href={`https://www.facebook.com/${this.props.Profile.contacts.facebook}`}>
            //                 <i className="facebook icon"/>
            //                     {this.props.Profile.contacts.facebook}
            //             </a>) : null}
            //         </div>
            //         <div>
            //             {this.props.Profile.contacts.mail ? (<div>
            //                 <i className="mail icon"/>
            //                 {this.props.Profile.contacts.mail}
            //             </div>) : null}
            //         </div>
            //         <div>
            //             {this.props.Profile.contacts.phone ? (<div>
            //                 <i className="phone icon"/>
            //                 {this.props.Profile.contacts.phone}
            //             </div>) : null}
            //         </div>
            //         <div>
            //             {this.props.Profile.contacts.vk ? (<a href={`https://www.vk.com/${this.props.Profile.contacts.vk}`}>
            //                 <i className="vk icon"/>
            //                 {this.props.Profile.contacts.vk}
            //             </a>) : null}
            //         </div>
            //         {this.props.Profile.contacts.twitter ? (<div>
            //             <i className="twitter icon"/>
            //             {this.props.Profile.contacts.twitter}
            //         </div>) : null}
            //         {this.props.Profile.location ? (<div>
            //             <i className="marker icon"/>
            //             {this.props.Profile.location}
            //         </div>) : null}
            //     </div>
            //   </div>

            //   <div className="ProfileDescriptionText">
            //     Comentarios
            //   </div>
            //   <Comment/>
            // </div>
        );
    }
});
var Settings = React.createClass({
    render: function () {
        return (
            <Link to="/settings">
                <button className="settings">
                    <i className="setting icon"/>
                </button>
            </Link>
        );
    }
});
var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                  <div>
                    <h3>
                      Name
                    </h3>
                    <img className="BlockImg" src="http://cs402225.vk.me/v402225355/335f/0S3hgdCzbaA.jpg" alt="" width="100px" height="100px"/>
                  </div>
                  <div>
                    <h3>Them: Bad
                      <span className="TextDataTime">
                        12.10.2016 in 22:10
                      </span>
                    </h3>
                    <div>
                      <fieldset className="rating">
                        <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                        <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                        <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                        <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                        <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                        <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                        <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                        <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                        <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                        <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                      </fieldset>
                    </div>
                    <div className="TextComent">
                      -Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                  </div>
                </div>
        );
    }
});
export default connect(
    (state)=> {
        return {
            userData: state.userData,
            Profile: state.Profile
        };
    }
)(Profile);

/**
 * Created by Artsiom_Rakitski on 3/18/2016.
 */
