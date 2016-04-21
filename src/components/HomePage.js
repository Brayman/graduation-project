import React from 'react';
import ListInfo from './ListInfo';
import {getPost, getCompanys} from '../actions';
import {connect} from 'react-redux';

import Message from './ErrorMessage';
var HomePage = React.createClass({
    componentWillMount() {
        this.props.dispatch(getPost());
        this.props.dispatch(getCompanys());
    },

    render: function () {
        return (
          <div>
          {/*<Message status={this.props.status}/>*/}
            <div className="NewsColumn">
              <div className="Post">
                <h2 className="TextHome">Companys</h2>
                <NewsColumn posts={this.props.companys}/>
              </div>
                <div className="Post">
                    <h2 className="TextHome">Users</h2>
                    <NewsColumn posts={this.props.posts}/>
                </div>
            </div>
          </div>
        );
    }
});
var NewsColumn = React.createClass({
    render: function () {
        var post = this.props.posts;
        return (
            <div>
                {post.map(function (post) {
                    return (
                        <ListInfo key={post._id} data={post}/>
                    );
                })}
            </div>
        );
    }
});
export default connect(
    (state)=> {
        return {
            status: state.status,
            companys: state.companys,
            posts: state.posts,
            color: state.color
        };
    }
)(HomePage);
