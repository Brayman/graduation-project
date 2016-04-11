import React from 'react';
import ListInfo from './ListInfo';
import {getPost} from '../actions';
import {connect} from 'react-redux';

var HomePage = React.createClass({
    componentWillMount() {
        this.props.dispatch(getPost());
    },
    render: function () {
        return (
          <div>
              <div>{this.props.status}</div>
            <div className="NewsColumn">
              <div className="Post">
                <h2 className="TextHome">Project</h2>
                <NewsColumn posts={this.props.posts}/>
              </div>
              <div className="Post">
                <h2 className="TextHome">Company</h2>
                <NewsColumn posts={this.props.posts}/>
              </div>
              <div className="Post">
                <h2 className="TextHome">Employee</h2>
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
            posts: state.posts
        };
    }
)(HomePage);
