import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {getUserData} from '../actions'

var Profile = React.createClass({
    componentWillMount(){
        //this.props.dispatch(loadUserData())
        this.props.dispatch(getUserData(this.props.params.user))
    },
    render: function() {
        var settings;
        if(this.props.userData.username===this.props.Profile.username){
            settings=<Settings/>
        }
        return (
            <div>
                <div className="ProfilContent">
                    <div className="Column item2 white">
                        <div>
                            <h2 className="PadingText">
                                {this.props.Profile.name || this.props.Profile.username}
                            </h2>
                        </div>
                        <div className="ProfilInfo">
                            <h3 className="NameFont">
                                Contact:
                            </h3>
                            <div>
                                <img className="ImgProfilInfo"
                                     src="svg/phone.svg"
                                />
                                {this.props.Profile.contact.phone}
                            </div>
                            <div>
                                <img className="ImgProfilInfo"
                                     src="svg/mail-ru.svg"
                                />
                                {this.props.Profile.contact.mail}
                            </div>
                        </div>
                        <div className="ProfilInfo">
                            <h3 className="PadingText">
                                Work:
                            </h3>
                            <div className="Text">
                                {this.props.Profile.description || 'Здесь пока пусто.'}
                            </div>
                        </div>
                    </div>
                    <div className="item1 white">

                        <div>
                            <img className="ProfilImage"
                                 src="http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg"
                            />
                        </div>
                        <h2 className="MarkerProfil">
                            Rating {this.props.Profile.rating}
                        </h2>
                        {settings}
                    </div>
                </div>
            </div>
        )
    }
});
var Settings = React.createClass({
    render: function() {
        return(
            <Link to="/settings">
                <button className="BtnSettings">
                    <img className="ImgBtn"
                         src="svg/settings.svg"
                    />
                    <h3 className="BtnText">
                        Settings
                    </h3>
                </button>
            </Link>
        )
    }
});
export default connect(
    (state)=> {return{
        userData: state.userData,
        Profile: state.Profile
    }})(Profile)
/**
 * Created by Artsiom_Rakitski on 3/18/2016.
 */
