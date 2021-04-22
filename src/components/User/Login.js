import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginUser } from "../../redux/User/usersActions.js";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
      },
      messages: [],
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

  LoginUser = (e) => {
    e.preventDefault();
    this.props.LoginUser(this.state.user.username, this.state.user.password);
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { messages } = this.props;
    console.log(nextProps.messages);
    if (nextProps.messages !== messages) {
      if (nextProps.messages) {
        this.setState({
          messages: [nextProps.messages],
        });
      } else {
        localStorage.setItem("status", "Login Success");
        window.location = "/";
      }
    }
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
          <form onSubmit={(e) => this.LoginUser(e)}>
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
            <div className="error-messages">
              <ul>
                {this.state.messages &&
                  this.state.messages.length > 0 &&
                  this.state.messages.map((error) => (
                    <li key={error}>
                      <p>{error}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <input type="submit" value="Sign In" />
            <p>Don't have an account?</p>
            <Link to="sign-up">Sign Up Now</Link>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    messages: users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginUser: (username, password) => {
      dispatch(LoginUser(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
