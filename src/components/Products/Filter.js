import React, { Component } from "react";
import {
  sortProducts,
  filterProducts,
} from "../../redux/Product/productsActions";
import { connect } from "react-redux";

export class Filter extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="filter">
        <div className="filter-result">
          <p>
            Hiển thị: <span>{products.length}</span> sản phẩm
          </p>
        </div>
        <div className="filter-products">
          <div className="filter-price">
            Price:
            <select
              value={this.props.sort}
              onChange={(e) => {
                this.props.sortProducts(products, e.target.value);
              }}
            >
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
          <div className="filter-size">
            Size:
            <select
              value={this.props.size}
              onChange={(e) => {
                this.props.filterProducts(products, e.target.value);
              }}
            >
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    size: state.products.size,
    sort: state.products.sort,
    product: state.products.items,
    filteredItems: state.products.filteredItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProducts: (products, size) => {
      dispatch(filterProducts(products, size));
    },
    sortProducts: (products, sort) => {
      dispatch(sortProducts(products, sort));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
