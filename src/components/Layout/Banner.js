import React, { Component } from "react";

import svg from "../../images/Path 61.svg";

class Banner extends Component {
  render(props) {
    return (
      <section className="banner">
        <div>
          <i className="fas fa-home"></i>
          <span>Trang chủ</span>
          <img src={svg} alt="" />
          <span>{this.props.title}</span>
        </div>
        <p>{this.props.title}</p>
      </section>
    );
  }
}

export default Banner;
