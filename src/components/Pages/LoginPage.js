import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../User/Login";

import SignUp from "../User/SignUp";
import ForgotPassword from "../User/ForgotPassword";
import NoMatch from "../404Page/404Page";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default LoginPage;
