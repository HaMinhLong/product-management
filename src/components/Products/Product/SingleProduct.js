import React, { Component } from "react";
import { fetchProduct } from "../../../redux/Product/productsActions";
import { connect } from "react-redux";

import Banner from "../../Layout/Banner";

import { Link } from "react-router-dom";
import phone from "../../../images/phone.svg";

class SingleProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
    };
  }

  // autoChangeImage = () => {
  //   let index = 1;
  //   setInterval(() => {
  //     this.setState({
  //       image: this.props.product[0].images[index],
  //     });
  //     index > this.props.product[0].images.length - 2 ? (index = 0) : index++;
  //   }, 4000);
  // };

  setImage = () => {
    setTimeout(() => {
      this.setState({
        image: this.props.product[0].images[0],
      });
    }, 1);
  };

  changeImage = (img) => {
    this.setState({
      image: img,
    });
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
    // this.autoChangeImage();
    this.setImage();
  };

  // componentWillUnmount() {
  //   clearInterval();
  // }

  render() {
    const product = this.props.product[0];
    const productName = product ? product.name : "";
    return (
      <>
        <Banner title={["Danh sách sản phẩm", `${productName}`]} />
        {!product ? (
          <h1>Loading...</h1>
        ) : (
          <section className="single-product-container">
            <section className="single-product">
              <div className="img-box">
                <div>
                  <div className="lens"></div>
                  <img src={this.state.image} alt="" />
                </div>
                <div className="img-slider">
                  {product.images &&
                    product.images.length > 0 &&
                    product.images.map((image) => (
                      <div onClick={() => this.changeImage(image)} key={image}>
                        <img id="featured" src={image} alt="" />
                      </div>
                    ))}
                </div>
              </div>
              <div className="product-info">
                <p>{product.name}</p>
                <p className="new">New</p>
                <div className="product-describe">
                  <p>{product.describe}</p>
                </div>
                <div className="colors-container">
                  <span>Colors: </span>
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
                  <span>Sizes: </span>
                  {product.availableSizes &&
                    product.availableSizes.length > 0 &&
                    product.availableSizes.map((size) => (
                      <span key={size}>{size}</span>
                    ))}
                </div>
                <div className="bg"></div>
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
                <section className="contact">
                  <img src={phone} alt="phone icon" />
                </section>
              </div>
            </section>
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    product: products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => {
      dispatch(fetchProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
