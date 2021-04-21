import React, { Component } from "react";

import { Link } from "react-router-dom";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  changePassword = (e) => {
    e.preventDefault();
    console.log(this.state.user);
  };

  render() {
    const { username, password, confirmPassword } = this.state;
    return (
      <section className="forgot-password-page">
        <div className="forgot-password-form">
          <h1>Forgot Password</h1>
          <form onSubmit={(e) => this.changePassword(e)}>
            <div>
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                required
                value={username}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="password">
                <i className="fas fa-lock"></i>New Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">
                <i className="fas fa-lock"></i>Confirm New Password:{" "}
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <input type="submit" value="Change Password" />
            <Link to="/">Cancel</Link>
          </form>
        </div>
      </section>
    );
  }
}

export default ForgotPassword;
