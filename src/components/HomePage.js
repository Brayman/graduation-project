import React, { Component } from 'react';
import ListInfo from './ListInfo'

export default class App extends Component {
  render() {
    return (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <h3 className="center">News project</h3>
        <ListInfo/>
      </div>
      <div className="col-lg-4 col-md-4">
        <h3 className="center">News project</h3>
        <ListInfo/>
      </div>
      <div className="col-lg-4 col-md-4">
        <h3 className="center">News project</h3>
        <ListInfo/>
      </div>
    </div>
  </div>
    );
  }
}
