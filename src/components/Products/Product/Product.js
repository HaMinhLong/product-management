import React, { Component } from "react";

import { Link } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmDeleteBox: false,
    };
  }

  deleteProduct = () => {
    this.props.deleteProduct(this.props.product.id);
    // this.props.filterProduct(this.props.product.id);
    this.setState({
      confirmDeleteBox: false,
    });
  };

  render() {
    const { product } = this.props;

    return (
      <section className="product-container">
        <div className="img-box">
          <Link to={`./products/${product.id}`}>
            <img src={product.images[0]} alt="" />
          </Link>
        </div>
        <div className="product-details">
          <div className="product-name">
            <h1>{product.name}</h1>
            <span className="new">New</span>
          </div>
          <div className="description">
            <p>{product.describe.slice(0, 45)} . . .</p>
          </div>
          <div className="colors-container">
            {product.colors &&
              product.colors.length > 0 &&
              product.colors.map((color) => (
                <span
                  style={{ borderColor: color }}
                  className="color"
                  primary={`"${color}"`}
                  key={color}
                ></span>
              ))}
          </div>
          <div className="sizes-container">
            {product.availableSizes &&
              product.availableSizes.length > 0 &&
              product.availableSizes.map((size) => (
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

          <div className="delete-product">
            <i
              className="fas fa-trash"
              onClick={() =>
                this.setState({
                  confirmDeleteBox: this.state.confirmDeleteBox ? false : true,
                })
              }
            ></i>
          </div>
        </div>
        {this.state.confirmDeleteBox && (
          <div className="delete-box">
            <div className="confirm-delete-box">
              <p>Bạn có muốn xóa sản phẩm này không?</p>
              <div className="delete">
                <button onClick={() => this.deleteProduct()}>Delete</button>

                <button
                  onClick={() => this.setState({ confirmDeleteBox: false })}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Product;
