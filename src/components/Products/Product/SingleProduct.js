import React, { Component } from "react";
import { fetchProduct } from "../../../redux/Product/productsActions";
import { connect } from "react-redux";

import Banner from "../../Layout/Banner";

class SingleProduct extends Component {
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
  };

  render() {
    const product = this.props.product[0];
    return (
      <>
        <Banner title={["Danh sách sản phẩm", `${product.name}`]} />
        {!product ? (
          <h1>Loading...</h1>
        ) : (
          <section className="single-product">
            <h1>{product.name}</h1>
          </section>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products,
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
