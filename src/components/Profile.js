import React from 'react'
import {connect} from 'react-redux'

var Test = React.createClass({
    render: function() {
        var post=this.props.news;
        return (
            <div className="Block">
                <img className="MediumImage Right Hover"
                     src="https://static-cdn.jtvnw.net/jtv_user_pictures/c_a_k_e-profile_image-b25ae37f0296d0f1-300x300.jpeg"
                     alt=""/>
                <div className="RowAll">
                    <div>
                        <h4 className="PostText">
                            {this.props.params.user}
                        </h4>
                    </div>
                    <div>
                        <h4 className="PostText">
                    <span className="Marker">
                        Rating {post[this.props.params.id-1].rating}
                    </span>
                        </h4>
                    </div>
                </div>
                <p className="PostText">
                    {post[this.props.params.id-1].description}
                </p>
            </div>
        )
    }
});
var Profile = React.createClass({
    render: function() {
        var post=this.props.news;
        return (
            <div>
                <div className="ProfilContent">
                    <div className="Column item2 white">
                        <div>
                            <h2 className="PadingText">
                                {this.props.news[0].username}
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
                                8-800-55-35-35
                            </div>
                            <div>
                                <img className="ImgProfilInfo"
                                     src="svg/mail-ru.svg"
                                />
                                Jesus@is.alive
                            </div>
                        </div>
                        <div className="ProfilInfo">
                            <h3 className="PadingText">
                                Work:
                            </h3>
                            <div className="Text">
                                {this.props.news[0].description}
                            </div>
                        </div>
                    </div>
                    <div className="item1 white">
                        <h2 className="MarkerProfil">
                            Rating {this.props.news[0].rating}
                        </h2>
                        <div>
                            <img className="ProfilImage"
                                 src="http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg"
                            />
                        </div>
                        <div>
                            <button className="BtnSettings">
                                <img className="ImgBtn"
                                     src="svg/settings.svg"
                                />
                                <h3 className="BtnText">
                                    Settings
                                </h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
export default connect(
    (state)=> {return{
        news: state.news,
        newCompany: state.newCompany
    }})(Profile)
/**
 * Created by Artsiom_Rakitski on 3/18/2016.
 */
