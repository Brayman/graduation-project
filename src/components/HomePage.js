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
              <Message status={this.props.status}/>
            <div className="NewsColumn">
              <div className="Post">
                <h2 className="TextHome">Project</h2>
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
var Message = React.createClass({
    componentWillMount() {
        this.setState({status: this.props.status});
    },
    close: function () {
        this.setState({status: null});
    },
    render: function () {
        if (this.state.status === null) {
            return null;
        } else {
            return (
                <div className="FeedBack NavFeedBack">
                    <i className="Icon small Right ButtonClose"
                       onClick={this.close}
                    >
                        close
                    </i>
                    <div className='green' >
                        {this.state.status}
                    </div>
                </div>
            );
        }
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
