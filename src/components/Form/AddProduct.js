import React, { Component } from "react";
import Banner from "../Layout/Banner";

export class AddProduct extends Component {
  render() {
    return (
      <section>
        <Banner title={["Thêm sản phẩm"]} />
        <section className="add-product">
          <p>add product</p>
        </section>
      </section>
    );
  }
}

export default AddProduct;
