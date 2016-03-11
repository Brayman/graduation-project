import React, { Component } from 'react';
import ListInfo from './ListInfo'
import HeaderMenu from './HeaderMenu'

export default class HomePage extends Component {
  render() {
    return (
  <div className="container-fluid">
    <HeaderMenu/>
    <div className="row PositionBegin">
      <div className="col-lg-4 col-md-4">
        <h3 className="center">News project</h3>
        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

        <ListInfo/>

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
