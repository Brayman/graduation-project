import React from 'react';
import '../../css/comment.css';
const Comment = React.createClass({
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
export default Comment;
/**
 * Created by xolod on 03.05.2016.
 */
