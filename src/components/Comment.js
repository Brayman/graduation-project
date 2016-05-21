import React from 'react';
import '../../css/comment.css';
const Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <div>
                    <h3 className="TextName">
                        Name
                    </h3>
                    <img className="BlockImg" src="http://cs402225.vk.me/v402225355/335f/0S3hgdCzbaA.jpg" alt="" width="100px" height="100px"/>
                </div>
                <div>
                    <h3>
                      Bad
                      <span className="TextDataTime">
                        12.10.2016 in 22:10
                      </span>
                    </h3>
                    <div className="TextReting">
                        Оценка: 10
                    </div>
                    <div className="TextComent">
                        -Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div className="InfoComent">
                      <div className="TextDataTime">
                        Полезен ли этот коментарий?
                      </div>
                      <div className="ButtonPositionRating">
                        <button className="ButtonForRating">Да</button>
                        <button className="ButtonForRating">Нет</button>
                      </div>
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
