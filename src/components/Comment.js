import React from 'react';
import '../../css/comment.css';
const Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <div>
                    <h3 className="TextName">
                        {this.props.data.userName}
                    </h3>
                    <img className="BlockImg" src={this.props.data.userAvatar} alt="" width="100px" height="100px"/>
                </div>
                <div>
                    <h3>
                        {this.props.data.title}
                      <span className="TextDataTime">
                          {this.props.data.date}
                      </span>
                    </h3>
                    <div className="TextReting">
                        Оценка: {this.props.data.rating}
                    </div>
                    <div className="TextComent">
                        {this.props.data.text}
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
