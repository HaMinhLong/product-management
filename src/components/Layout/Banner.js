import React, { Component } from "react";

import svg from "../../images/Path 61.svg";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div>
          <i className="fas fa-home"></i>
          <span>Trang chủ</span>
          <img src={svg} alt="" />
          <span>Danh sách sản phẩm</span>
        </div>
        <p>Danh sách sản phẩm</p>
      </section>
    );
  }
}

export default Banner;
