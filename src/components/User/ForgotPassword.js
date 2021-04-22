import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { changePassword } from "../../redux/User/usersActions";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      error: "",
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
    this.props.changePassword(
      this.state.user.phoneNumber,
      this.state.user.password
    );
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { message } = this.props;
    console.log(nextProps.message);
    if (nextProps.message !== message) {
      if (nextProps.message) {
        this.setState({
          error: [nextProps.message],
        });
      } else {
        if (this.state.user.password !== this.state.user.confirmPassword) {
          this.setState({
            error: ["Password not match"],
          });
        } else {
          this.props.history.push("/");
        }
      }
    }
  };

  render() {
    const { phoneNumber, password, confirmPassword } = this.state;
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
                value={phoneNumber}
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
            <div className="error-messages">
              <ul>
                {this.state.error &&
                  this.state.error.length > 0 &&
                  this.state.error.map((e) => (
                    <li key={e}>
                      <p>{e}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <input type="submit" value="Change Password" />
            <Link to="/">Cancel</Link>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    message: users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (phoneNumber, password) => {
      dispatch(changePassword(phoneNumber, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
