import React from 'react';
import ListInfo from './ListInfo';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {connect} from 'react-redux';
var HomePage = React.createClass({
    componentWillMount() {
        //this.props.actions.getPost();
        //this.props.actions.getCompanys();
    },

    render: function () {
        var actions = this.props.actions;
        var post = this.props.posts;
        return (
          <div>
          {/*<Message status={this.props.status}/>*/}
            <div className="NewsColumn">
                <div className="Post">
                    <h2 className="TextHome">Users</h2>
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
        companys: state.companys,
        posts: state.posts
    };
}

function actions(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}
export default connect(states, actions)(HomePage);
