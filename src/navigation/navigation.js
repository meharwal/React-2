import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import App from "../components/App";
import Login from "../components/Login";

import { connect } from "react-redux";
import { getUser, logout } from "../actions/userActions";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              DIARY 2020
            </Link>
            {this.props.user === null ? (
              <div>
                <Link className="navbar-brand" to="/login">
                  Login
                </Link>
              </div>
            ) : (
              <Link to="/logout" onClick={() => this.props.logout}>
                logout
              </Link>
            )}
          </div>
        </div>
        <Switch>
          <Route path="/" component={App} exact={true}></Route>
          <Route path="/login" component={Login} exact={true}></Route>
        </Switch>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUser, logout })(Header);
