import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="toggle"></div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Danh sách sản phẩm</Link>
              <div className="icon"></div>
            </li>
            <li>
              <Link to="/add-product">Thêm sản phẩm</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
