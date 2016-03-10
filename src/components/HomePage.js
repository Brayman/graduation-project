import React from 'react';
import ListInfo from './ListInfo';
import {connect} from 'react-redux'

var HomePage = React.createClass({
  render: function () {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <h3 className="center">News project</h3>
              <NewsColumn posts={this.props.news}/>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3 className="center">News project</h3>
              <NewsColumn posts={this.props.newCompany}/>
            </div>
            <div className="col-lg-4 col-md-4">
              <h3 className="center">News project</h3>
            </div>
          </div>
        </div>
    )
  }
});
var NewsColumn = React.createClass({
  render: function () {
    var posts=this.props.posts;
    return (
        <div>
          {posts.map(function(post){
            return (
                <ListInfo key={post.id} data={post}/>
            )
          })}
        </div>
    )
  }
});
export default connect(
    (state)=> {return{
      news: state.news,
      newCompany: state.newCompany
    }})(HomePage)