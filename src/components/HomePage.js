import React from 'react';
import ListInfo from './ListInfo';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {connect} from 'react-redux';
import '../../css/home.css';
import Message from './ErrorMessage';
var HomePage = React.createClass({
    componentWillMount() {
        this.props.actions.getPost();
        //this.props.actions.getCompanys();
    },

    render: function () {
        var actions = this.props.actions;
        var post = this.props.posts;
        return (
          <div className="content home">
          <Message status={this.props.status} close={() => actions.closeMessage()}/>
            <div className="NewsColumn">
                <div className="Post">
                    <div>
                        {post.map(function (post) {
                            return (
                                <ListInfo key={post._id} data={post} action={action => actions.openProfile(action)}/>
                            );
                        })}
                    </div>
                </div>
            </div>
          </div>
        );
    }
});
var NewsColumnn = React.createClass({
    render: function () {
        return (
            <p></p>
        );
    }
});
function ratingSort(a, b) {
    return b.rating - a.rating;
}
function states(state) {
    return {
        status: state.status,
        posts: state.posts
    };
}

function actions(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}
export default connect(states, actions)(HomePage);
