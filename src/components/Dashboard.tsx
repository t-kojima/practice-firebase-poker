import React, { Component } from 'react';
import HeaderNav from './HeaderNav';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <HeaderNav {...this.props}></HeaderNav>
        dashboard
      </div>
    );
  }
}
