import React, { Component } from "react";

import { Link } from "react-router-dom";
class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <section className="product-container">
        <div className="img-box">
          <Link to={`./products/${product.id}`}>
            <img src={`${product.images[0]}`} alt="" />
          </Link>
        </div>
        <div className="product-details">
          <div className="product-name">
            <h1>{product.name}</h1>
            <span className="new">New</span>
          </div>
          <div className="description">
            <p>{product.describe}</p>
          </div>
          <div className="colors-container">
            {product.colors.map((color) => (
              <span
                style={{ borderColor: color }}
                className="color"
                primary={`"${color}"`}
                key={color}
              ></span>
            ))}
          </div>
          <div className="sizes-container">
            {product.availableSizes.map((size) => (
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
              <p>{product.price}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
