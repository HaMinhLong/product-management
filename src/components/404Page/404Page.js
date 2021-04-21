import React, { Component } from "react";
import { withRouter } from "react-router";

export class NoMatch extends Component {
  render() {
    return (
      <section className="page-not-found">
        <h1>404 Page Not Found</h1>
        <p>
          Redirect to{" "}
          <span onClick={() => this.props.history.push("/")}>Home Page</span>
        </p>
      </section>
    );
  }
}

export default withRouter(NoMatch);
