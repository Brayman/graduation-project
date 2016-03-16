import HeaderMenu from './HeaderMenu'
import React from 'react';
import ListInfo from './ListInfo';
import {connect} from 'react-redux'

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <HeaderMenu/>
        <div className="RowAll">
          <div className="Post">
            <h2 className="TextHome">Project</h2>
            <ListInfo/>
          </div>
          <div className="Post">
            <h2 className="TextHome">Company</h2>
            <ListInfo/>
          </div>
          <div className="Post">
            <h2>Employee</h2>
            <ListInfo/>
            <ListInfo/>
          </div>
        </div>
      </div>
    )
  }
});

export default HomePage;
