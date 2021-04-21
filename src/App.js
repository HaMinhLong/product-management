import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Pages/Home";
import LoginPage from "./components/Pages/LoginPage";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {localStorage.getItem("user") ? (
              <Route path="/" render={() => <Home />} />
            ) : (
              <Route path="/" render={() => <LoginPage />} />
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
