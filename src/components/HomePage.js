import HeaderMenu from './HeaderMenu'
import React from 'react';
import ListInfo from './ListInfo';
import {connect} from 'react-redux'

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <div className="NewsColumn">
          <div className="Post">
            <h2 className="TextHome">Project</h2>
            <NewsColumn posts={this.props.news}/>
          </div>
          <div className="Post">
            <h2 className="TextHome">Company</h2>
            <NewsColumn posts={this.props.newCompany}/>
          </div>
          <div className="Post">
            <h2 className="TextHome">Employee</h2>
            <NewsColumn posts={this.props.news}/>
          </div>
        </div>
      </div>
    )
  }
});
var NewsColumn = React.createClass({
  render: function () {
    var post=this.props.posts;
    return (
       <div>
         {post.map(function(post){
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
