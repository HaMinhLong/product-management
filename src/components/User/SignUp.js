import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    console.log(this.state.user);
  };

  render() {
    const { fullName, username, password, phoneNumber, address } = this.state;
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
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
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
                value={address}
                onChange={(e) => this.handleChange(e)}
              />
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

export default SignUp;
