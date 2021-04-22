import React, { Component } from "react";
import { Link } from "react-router-dom";

import { createUser } from "../../redux/User/usersActions";

import { connect } from "react-redux";
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fullName: "",
        username: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
      confirmPassword: "",
      errorMessages: [],
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

  SignUp = (e) => {
    e.preventDefault();
    this.props.createUser(this.state.user);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { messages } = this.props;
    console.log(nextProps.messages);
    if (nextProps.messages !== messages) {
      if (nextProps.messages) {
        this.setState({
          errorMessages: [nextProps.messages],
        });
      } else {
        if (this.state.user.password === this.state.confirmPassword) {
          this.setState({
            errorMessages: ["Password not match"],
          });
        } else {
          this.props.history.push("/");
        }
      }
    }
  }

  render() {
    const {
      fullName,
      username,
      password,
      phoneNumber,
      address,
    } = this.state.user;
    return (
      <section className="sign-up-page">
        <div className="sign-up-form">
          <h1>Create your account</h1>
          <p>Sign up by entering the information below</p>
          <form onSubmit={(e) => this.SignUp(e)}>
            <div>
              <label htmlFor="fullName">Full Name: </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={fullName}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                value={username}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
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
              <label htmlFor="confirm-password">Confirm Password: </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                required
                value={this.state.confirmPassword}
                onChange={(e) =>
                  this.setState({
                    ...this.state,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                required
                value={phoneNumber}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                name="address"
                id="address"
                required
                value={address}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="error-messages">
              <ul>
                {this.state.errorMessages &&
                  this.state.errorMessages.length > 0 &&
                  this.state.errorMessages.map((error) => (
                    <li key={error}>
                      <p>{error}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <input type="submit" value="Sign Up" />
            <p>Have an account?</p>
            <Link to="/">Sign In Now</Link>
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
    createUser: (user) => {
      dispatch(createUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
