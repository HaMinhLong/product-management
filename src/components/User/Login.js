import React, { Component } from "react";

import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
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

  Login = (e) => {
    e.preventDefault();
    console.log(this.state.user);
  };

  render() {
    return (
      <section className="login-page">
        <div className="login-form">
          <div className="image-box">
            <img
              src="https://i.pinimg.com/564x/f0/86/35/f086356323a803e8fb7591c60b9b6033.jpg"
              alt=""
            />
          </div>
          <h1>Welcome</h1>
          <p>Sign in by entering the information below</p>
          <form onSubmit={(e) => this.Login(e)}>
            <div>
              <label htmlFor="username">
                <i className="fa fa-user" aria-hidden="true"></i>Username:{" "}
              </label>
              <input
                type="username"
                name="username"
                id="username"
                required
                value={this.state.username}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="password">
                <i className="fas fa-lock"></i>Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <p>
              <Link to="/forgot-password">Forgot password?</Link>
            </p>
            <input type="submit" value="Sign In" />
            <p>Don't have an account?</p>
            <Link to="sign-up">Sign Up Now</Link>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
