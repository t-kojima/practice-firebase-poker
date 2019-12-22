import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import firebase from '../firebase';

interface Props {
  user: any;
}

export default class HeaderNav extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  logout() {
    firebase.auth().signOut();
  }
  render() {
    // const { user } = this.props as Props;
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to={'/'}>
              <img src={logo} alt="logo" width="40" height="30"></img>
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className="button is-warning" onClick={this.logout.bind(this)}>
                    <strong>Logout</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
