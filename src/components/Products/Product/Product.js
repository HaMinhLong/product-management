import React, { Component } from "react";

import { Link } from "react-router-dom";
class Product extends Component {
  render(props) {
    return (
      <section className="product-container">
        <div className="img-box">This is image</div>
        <div className="product-details">
          <div className="product-name">
            <h1>{this.props.product.name}</h1>
            <span className="new">New</span>
          </div>
          <div className="description">
            <p>{this.props.product.describe}</p>
          </div>
          <div className="colors-container">
            {this.props.product.colors.map((color) => (
              <span
                style={{ borderColor: color }}
                className="color"
                primary={`"${color}"`}
                key={color}
              ></span>
            ))}
          </div>
          <div className="sizes-container">
            {this.props.product.availableSizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
          <div className="buy-price">
            <Link to="/" className="buy">
              <i className="fas fa-shopping-cart"></i>
              Add To Cart
            </Link>
            <div className="price">
              <i className="fas fa-dollar-sign"></i>
              <p>{this.props.product.price}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
