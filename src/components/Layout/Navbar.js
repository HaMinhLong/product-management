import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
  LogOut = () => {
    window.localStorage.setItem("status", "");
    window.location = "/";
  };

  toggleLinks = () => {
    const toggleLinks = document.querySelector(".toggle-links");
    const close = document.querySelector(".close");
    const a = document.querySelectorAll(".link");

    const links = document.querySelector(".links");

    toggleLinks.addEventListener("click", () => {
      links.classList.add("active");
    });
    close.addEventListener("click", () => {
      links.classList.remove("active");
    });
    a.forEach((link) =>
      link.addEventListener("click", () => {
        links.classList.remove("active");
      })
    );
  };

  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="toggle-links">
          <div className="toggle" onClick={() => this.toggleLinks()}></div>
        </div>
        <div className="links">
          <div className="close" onClick={() => this.toggleLinks()}></div>
          <ul>
            <li>
              <Link className="link" to="/" onClick={() => this.toggleLinks()}>
                Danh sách sản phẩm
              </Link>
              <div className="icon"></div>
            </li>
            <li>
              <Link
                className="link"
                to="/add-product"
                onClick={() => this.toggleLinks()}
              >
                Thêm sản phẩm
              </Link>
            </li>
            <li id="log-out-icon">
              <i
                className="fas fa-sign-out-alt"
                onClick={() => this.LogOut()}
              ></i>
            </li>
            <li id="log-out" className="link">
              <Link to="/" onClick={() => this.LogOut()}>
                Đăng xuất
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
