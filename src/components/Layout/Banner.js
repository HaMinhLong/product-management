import React, { Component } from "react";
import { Link } from "react-router-dom";
import svg from "../../images/Path 61.svg";

class Banner extends Component {
  render() {
    const { title } = this.props;
    return (
      <section className="banner">
        <div>
          <i className="fas fa-home"></i>
          <span>
            <Link to="/">Trang chủ</Link>
          </span>
          {title.map((tt) => (
            <span key={tt}>
              <img src={svg} alt="" />
              <span>{tt}</span>
            </span>
          ))}
        </div>
        <p>
          <span>{title[0]}</span>
          <img src={svg} alt="" />
        </p>
      </section>
    );
  }
}

export default Banner;
