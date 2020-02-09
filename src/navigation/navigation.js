import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import App from "../components/App";
import Login from "../components/Login";

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <Link className="navbar-brand" to="/">
            DIARY 2020
          </Link>
          <Link className="navbar-brand" to="/login">
            Login
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/" component={App} exact={true}></Route>
        <Route path="/login" component={Login} exact={true}></Route>
      </Switch>
    </nav>
  );
};

export default Header;
